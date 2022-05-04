import styled, { keyframes } from "styled-components";
import registerImage from "../../assets/img/registerImage.svg";

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

export const Breaker = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
`;

export const Background = styled.div`
  @media (min-width: 800px) {
    width: 300px;
    height: 300px;
    background: url(${registerImage}) no-repeat center;
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
  /* background: #DEBBA0 */

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


export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-width: 30vw;
  height: 60vh;
  padding: 30px 0;
  background-color: #ffb479;

  border-radius: 5px;

  .FormTitle {
    color: #fceee0;
    font-weight: bold;
  }

  .ErrorMessage {
    color: #f64825;
    font-size: 10px;
  }

  .linkToLogin {
    font-size: 12px;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    background: url(${registerImage}) no-repeat center;
    background-size: contain;
    height: 200px;
    width: 200px;
    background-color: transparent;
    margin-left: 100px;
    animation: ${showUp} 2s;
  }
`;

export const FormInput = styled.input`
  margin: 10px;
  border-radius: 5px;
  border: transparent;
  background-color: #fceee0;
  height: 30px;
  width: 180px;
`;

export const FormButton = styled.button`
  margin: 5px;
  width: 180px;
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: none;
  background: #f64825;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;
