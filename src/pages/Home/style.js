import styled, { keyframes } from "styled-components";
import imgHome from "../../assets/img/homeImage.svg";

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

export const Background = styled.div`
  @media (min-width: 800px) {
    width: 400px;
    height: 400px;
    background: url(${imgHome}) no-repeat center;
    background-size: contain;
    animation: ${showUp} 2s;
  }
`;

export const Breaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  animation: ${appearFromRight} 1s;

  .title {
    margin-bottom: 40px;
    font-size: 24px;
    font-family: "Nunito", sans-serif;
  }

  .trademark {
    color: rgba(246, 72, 37);
    font-family: 'Flamenco', cursive;
    font-size: 28px;
  }

  .subtitle {
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    margin-bottom: 40px;
  }

  .startButton {
    margin-inline: 3px;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(247, 133, 55, 1) 0%,
      rgba(246, 72, 37, 1) 100%
    );
    border-radius: 50px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: "Nunito", sans serif;

    &:hover {
      background-color: rgba(247, 133, 55, 1);
      background: none;
      transition: 0.4s;
      color: rgba(246, 72, 37, 1);
    }
  }

  @media(min-width: 600px) {
    .title {
      font-size: 30px;
    }

    .subtitle {
      font-size: 18px;
      font-weight: 200;
      max-width: 80%;
    }

    .trademark {
      font-size: 37px;
    }

  }

  @media(min-width: 800px) {
    max-width: 60vh;
  }
`;
