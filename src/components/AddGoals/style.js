import styled, { keyframes } from "styled-components";

const AppearSlow = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const Container = styled.div`
  background-color: #ff8c64;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 250px;
  max-width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${AppearSlow};
  animation-duration: 0.4s;

  h2 {
    margin-block: 10px;
    font-family: "Flamenco", cursive;
    color: #3B322C;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    min-width: 20vw;
    font-family: "Nunito";
    font-size: 14px;
    margin-block: 2px;
  }

  p {
    margin-top: 3px;
    font-size: 10px;
    color: red;
    font-family: "Nunito", sans-serif;
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
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #FFCCA6;;
      color:rgba(246, 72, 37, 1);
      transition: 0.2s;
    }
`;
