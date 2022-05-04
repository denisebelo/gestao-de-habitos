import styled from "styled-components";

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-end;
  width: 100vw;
  padding: 15px 0;
  background-color: #ffd6b7;
  font-family: "Nunito", sans-serif;
  margin-block-end: 0px;

  .FooterSignature {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-start: 15px;
    font-size: 10px;
  }

  .FooterLinks {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 15px;
  }

  a {
    margin-inline: 5px;
    font-size: 10px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 15px;
    font-size: 10px;
    cursor: pointer;
    text-decoration: underline;
    color: #2073c3;
  }

  @media (min-width: 600px) {
    .FooterSignature {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
`;
