import React from "react";
import { Line } from "react-chartjs-2";

import {
  FiMoon,
  FiSun,
  FiDroplet,
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiSearch,
} from "react-icons/fi";

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

const data = {
  labels: [
    "0h",
    "1h",
    "2h",
    "3h",
    "4h",
    "5h",
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "11h",
    "12h",
    "13h",
    "14h",
    "15h",
    "16h",
    "17h",
    "18h",
    "19h",
    "20h",
    "21h",
    "22h",
    "23h",
  ],
  datasets: [
    {
      label: "Temperature",
      fill: true,
      backgroundColor: "#4bc0c050",
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
      data: [
        15,
        15,
        14,
        14,
        14,
        14,
        14,
        13,
        15,
        18,
        20,
        22,
        24,
        25,
        25,
        25,
        23,
        20,
        19,
        17,
        15,
        15,
        15,
        15,
      ],
    },
  ],
};

const Home: React.FC = () => {
  return (
    <Container>
      <WeatherFastDescription>
        <Form>
          <button type="submit">
            <FiSearch />
          </button>
          <Input type="text" placeholder="Search for places" required />
        </Form>
        <FiMoon size={150} />
        <h1>12°C</h1>
        <h4>
          Monday, <Weak>16:00</Weak>
        </h4>
        <hr />
        <div>
          <FiSun />
          <p>Clear sky</p>
        </div>
        <div>
          <FiDroplet />
          <p>4% Rain</p>
        </div>
        <CityCard>
          <h4>Belo Horizonte, BR</h4>
        </CityCard>
      </WeatherFastDescription>
      <DetailedContent>
        <header>
          <h3>Today</h3>
        </header>
        <TemperatureGraph>
          <Line data={data} width={510} />
        </TemperatureGraph>
        <h2>Today's highlights</h2>
        <TodayHighlightsContainer>
          <HightlightCard>
            <h2>Wind Status</h2>
            <h1>
              7.70 <span>km/h</span>
            </h1>
          </HightlightCard>
          <HightlightCard>
            <h2>Sunrise {"&"} Sunset</h2>
            <div>
              <div>
                <FiArrowUpCircle size={30} /> <h4>06:00</h4>
              </div>
              <div>
                <FiArrowDownCircle size={30} /> <h4>18:00</h4>
              </div>
            </div>
          </HightlightCard>
          <HightlightCard>
            <h2>Humidity</h2>
            <h1>78%</h1>
            <h3>Normal</h3>
          </HightlightCard>
        </TodayHighlightsContainer>
      </DetailedContent>
    </Container>
  );
};

export default Home;
