import styled, { css } from "styled-components";
import { shade, transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  overflow-y: hidden;
`;

export const WeatherFastDescription = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 325px;
  align-items: center;
  justify-content: center;

  & > svg {
    margin: 18px 0;
  }

  & > h1 {
    font-size: 36px;
    margin: 18px 0;
    font-size: 60px;
  }
  & > div {
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 5px;
    }
  }

  & > hr {
    margin: 18px 0;
  }
  & > div {
    margin: 10px 0;
  }

  & > strong:last-child {
    position: absolute;
    bottom: 10px;
  }
`;

export const CityCard = styled.div`
  margin-top: 20px;
`;

export const Weak = styled.strong`
  color: #b6b6b6;
`;

export const DetailedContent = styled.div`
  flex: 1;
  background-color: ${(props) => shade(0.04, props.theme.background)};
  padding-top: 10px;
  padding-left: 24px;
  & > header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > h3 {
      margin: 0 30px;
      width: fit-content;
      transition: all 0.6s ease;
      border-bottom: 2px solid
        ${(props) => transparentize(0.2, props.theme.text)};
      cursor: pointer;

      &:hover {
        transform: translateY(-2px);
        border-bottom-color: ${(props) =>
          transparentize(0.2, props.theme.text)};
      }
    }
  }
`;

export const TemperatureGraph = styled.div`
  width: 90%;
  min-height: 100px;
  margin: 40px auto;
  background-color: ${(props) => shade(0.02, props.theme.background)};

  & > h3 {
    text-align: center;
    margin: 10px 0;
  }
`;

export const TodayHighlightsContainer = styled.div`
  margin: 25px 25px 25px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 160px);
  gap: 15px;
  height: 100%;
  & > div {
    background-color: ${(props) => props.theme.background};
    border-radius: 15px;
  }
`;

export const HightlightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  ${(props) =>
    props.theme.isDark &&
    css`
      border: 1px solid #b6b6b6;
    `}
  & > h2 {
    color: #b6b6b6;
  }
  & > h1 {
    margin: auto 0;
    font-size: 46px;
    & > span {
      font-size: 24px;
    }
  }
  & > div {
    margin: auto 0;
    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      & > svg {
        margin-right: 10px;
      }
      & + div {
        margin-top: 10px;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  color: ${(props) => props.theme.text};
  border-radius: 50px;
  padding: 10px;
  margin: 10px 0;

  input {
    color: ${(props) => props.theme.text};
  }

  & > button {
    margin-right: 10px;
    background: transparent;
    border: 0;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
`;
