import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 1; */

  > p {
    width: 80vw;
    height: 450px;
    background-color: #fff;
    margin: 120px auto;
  }
`;

export default ModalContainer;
