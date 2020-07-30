import React, { useState, useEffect, useCallback, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  FiMoon,
  FiSun,
  FiCloud,
  //FiDroplet,
  FiSunrise,
  FiSunset,
  FiSearch,
} from "react-icons/fi";

import getDayName from "../../utils/getDayName";
import api from "../../services/api";
import Input from "../../components/Input";
import {
  Container,
  WeatherFastDescription,
  Weak,
  CityCard,
  DetailedContent,
  TemperatureGraph,
  TodayHighlightsContainer,
  HightlightCard,
  Form,
} from "./styles";

interface ICurrentWeather {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: "Clouds" | "Clear";
    description: string;
  }>;
  wind: {
    speed: number;
  };
  timezone: number;
  dt: number;
  sys: {
    country: string;
    sunset: number;
    sunrise: number;
  };
  name: string;
}

interface IFormatedDates {
  current: Date;
  sunrise: Date;
  sunset: Date;
}

interface IForecastResponse {
  list: ICurrentWeather[];
}

const possibleWeatherIcons = {
  Clouds: <FiCloud />,
  Clear: <FiSun />,
};

const Home: React.FC = () => {
  const [isCelciusSelected, setIsCelciusSelected] = useState(true);
  const [graphHours, setGraphHours] = useState<string[]>([]);
  const [graphTemperatures, setGraphTemperatures] = useState<number[]>([]);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const [formattedDates, setFormattedDates] = useState<IFormatedDates>(
    {} as IFormatedDates
  );
  const [
    currentWeatherData,
    setCurrentWeatherData,
  ] = useState<ICurrentWeather | null>(null);

  const data = {
    labels: graphHours,
    datasets: [
      {
        label: "Temperature",
        fill: true,
        backgroundColor: "#4bc0c080",
        lineTension: 0.2,
        borderColor: "#4BC0C0",
        pointBorderColor: "#4BC0C0",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#2288aa",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 20,
        data: graphTemperatures,
      },
    ],
  };

  const loadApi = useCallback(async () => {
    const forecastResponse = await api.get<IForecastResponse>(
      `/forecast?q=${cityInputRef.current?.value || "London"}${
        isCelciusSelected ? "&units=metric" : ""
      }&appid=e874e11deb027e1d25bd2598ae20e169`
    );

    const temperatures = forecastResponse.data.list.map(
      (hourData) => hourData.main.temp
    );

    const hours = forecastResponse.data.list.map(
      (hourData) => `${new Date(hourData.dt * 1000).getHours()}h`
    );

    setGraphHours(hours);
    setGraphTemperatures(temperatures);
    const currentWeatherResponse = await api.get<ICurrentWeather>(
      `/weather?q=${cityInputRef.current?.value || "London"}${
        isCelciusSelected ? "&units=metric" : ""
      }&appid=e874e11deb027e1d25bd2598ae20e169`
    );
    setCurrentWeatherData(currentWeatherResponse.data);
    const currentDate = new Date(
      (currentWeatherResponse.data.dt + currentWeatherResponse.data.timezone) *
        1000
    );

    const sunriseDate = new Date(
      (currentWeatherResponse.data.sys.sunrise +
        currentWeatherResponse.data.timezone) *
        1000
    );

    const sunsetDate = new Date(
      (currentWeatherResponse.data.sys.sunset +
        currentWeatherResponse.data.timezone) *
        1000
    );

    setFormattedDates((formatted) => ({
      ...formatted,
      current: currentDate,
      sunrise: sunriseDate,
      sunset: sunsetDate,
    }));
  }, [isCelciusSelected]);

  const searchCity = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (cityInputRef.current?.value) {
        loadApi();
      }
    },
    [loadApi]
  );

  useEffect(() => {
    loadApi();
  }, [loadApi]);

  return (
    <Container>
      <WeatherFastDescription>
        <Form onSubmit={searchCity}>
          <button type="submit">
            <FiSearch />
          </button>
          <Input
            type="text"
            placeholder="Search for places"
            ref={cityInputRef}
            required
          />
        </Form>
        {formattedDates.current?.getHours() >= 6 &&
        formattedDates.current?.getHours() <= 18 ? (
          <FiSun size={150} />
        ) : (
          <FiMoon size={150} />
        )}
        <h1>
          {currentWeatherData
            ? Math.floor(currentWeatherData.main.temp)
            : "..."}
          {isCelciusSelected ? "°C" : " F"}
        </h1>
        <h4>
          {getDayName(formattedDates.current) || "..."},{" "}
          <Weak>
            {formattedDates.current?.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }) || "..."}
          </Weak>
        </h4>
        <hr />
        <div>
          {possibleWeatherIcons[currentWeatherData?.weather[0].main || "Clear"]}
          <p>{currentWeatherData?.weather[0].main || "..."}</p>
        </div>
        <CityCard>
          <h4>
            {currentWeatherData?.name || "..."},{" "}
            {currentWeatherData?.sys.country || "..."}
          </h4>
        </CityCard>
        <Weak>Hours are in UTC+0</Weak>
      </WeatherFastDescription>
      <DetailedContent>
        <header>
          <h3>Today</h3>

          <h3 onClick={() => setIsCelciusSelected((state) => !state)}>
            {isCelciusSelected ? "Celcius" : "Fahrenheit"}
          </h3>
        </header>
        <TemperatureGraph>
          <h3>Next 6 days temperatures!</h3>
          <Line data={data} width={500} />
        </TemperatureGraph>
        <h2>Today's highlights</h2>
        <TodayHighlightsContainer>
          <HightlightCard>
            <h2>Wind Status</h2>
            <h1>
              {currentWeatherData?.wind.speed || "..."} <span>m/s</span>
            </h1>
          </HightlightCard>
          <HightlightCard>
            <h2>Sunrise {"&"} Sunset</h2>
            <div>
              <div>
                <FiSunrise size={30} />{" "}
                <h4>
                  {formattedDates.sunrise?.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }) || "..."}
                </h4>
              </div>
              <div>
                <FiSunset size={30} />{" "}
                <h4>
                  {formattedDates.sunset?.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }) || "..."}
                </h4>
              </div>
            </div>
          </HightlightCard>
          <HightlightCard>
            <h2>Humidity</h2>
            <h1>{currentWeatherData?.main.humidity || "..."}%</h1>
            <h3>
              {currentWeatherData
                ? currentWeatherData.main.humidity > 50
                  ? "Normal"
                  : "Unhealthy"
                : "..."}
            </h3>
          </HightlightCard>
        </TodayHighlightsContainer>
      </DetailedContent>
    </Container>
  );
};

export default Home;
