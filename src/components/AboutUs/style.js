import styled, { keyframes } from "styled-components";

const AppearSlow = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

const AboutUsContainer = styled.div`
  background-color: #ffcca6;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 70vw;
  max-width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${AppearSlow};
  animation-duration: 0.4s;
  font-family: "Flamenco", cursive;

  h1 {
    margin-block-start: 10px;
    margin-block-end: 15px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  h2 {
    margin-block: 10px;
    font-family: "Flamenco", cursive;
  }

  h4 {
    font-weight: normal;
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    margin-block-end: 10px;
  }

  &:hover {
    background-color: #f2d2b6;

    transition: 0.2s;
  }

  @media(min-width: 600px) {
    max-width: 50vw;
    
    h4 {
      font-size: 16px;
    }
  }
`;

export default AboutUsContainer;
