import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & > button {
    background: transparent;
    border: 0;
  }

  & svg {
    color: #fff;
    transition: all 0.5s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
      color: #000;
    }
  }

  & > *:first-child {
    margin-right: 15px;
  }
`;

export const TextInput = styled.input`
  outline: 0;
  border: 0;
  background: transparent;
`;
