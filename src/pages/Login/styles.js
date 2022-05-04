import styled, { keyframes } from "styled-components";
import imgLogin from "../../assets/img/loginImage.svg";

const appearFromRight = keyframes`
from{
    opacity: 0;
    transform: translate(50px);
}
to {
    opacity:1;
    transform: translateX(0px)
}
`;

const showUp = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 800px) {
    width: 400px;
    height: 400px;
    background: url(${imgLogin}) no-repeat center;
    background-size: contain;
    animation: ${showUp} 2s;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 400px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

    h1 {
      font-family: "Flamenco", cursive;
    }

    h2 {
      font-size: 14px;
      font-weight: 200;
    }

    form {
      margin: 30px 0;
      width: 280px;
      text-align: center;
    }

    input {
      font-family: "Nunito";
      font-size: 14px;
    }

    button {
      margin-block: 15px;
      width: 200px;
      height: 40px;
      background-color: rgba(246, 72, 37, 1);
      border-radius: 50px;
      border-style: none;
      font-family: "Nunito", sans-serif;
      font-size: 18px;
      color: #ffffff;
      cursor: pointer;

      &:hover {
        background-color: rgba(247, 133, 55, 1);
        transition: 0.2s;
      }
    }

    a {
      font-weight: bold;
      color: rgba(246, 72, 37, 1);
      text-decoration: none;
      font-size: 14px;
    }

    p {
      margin-top: 3px;
      font-size: 10px;
      color: red;
      font-family: "Nunito", sans-serif;
    }
`;
