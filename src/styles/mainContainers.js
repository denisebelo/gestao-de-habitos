import styled from "styled-components";

export const InitialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fceee0;
  padding: 20px;
  margin: 15px;
  width: 90vw;
  min-height: 70vh;
  max-height: 70vh;
  margin-block: 20px;
  border-radius: 5px;
  overflow: auto;
`;

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  background-color: #fceee0;
  padding: 20px;
  margin: 15px;
  width: 90vw;
  min-height: 70vh;
  max-height: 70vh;
  margin-block: 20px;
  border-radius: 5px;
  overflow: auto;
`;

export const MainButton = styled.button`
  margin-inline: 3px;
  cursor: pointer;
  padding: 8px;
  border: none;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(247, 133, 55, 1) 0%,
    rgba(246, 72, 37, 1) 100%
  );
  border-radius: 50px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  font-family: "Nunito", sans serif;

  &:hover {
      background-color: rgba(247, 133, 55, 1);
      background: none;
      transition: 0.4s;
      color: rgba(246, 72, 37, 1);
  }

  @media(min-width: 600px) {
    font-size: 14px;
  }
`;