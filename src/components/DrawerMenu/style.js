import styled from "styled-components";

export const DrawerContainer = styled.div`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;

    img {
        border-radius: 100px;
        margin-block-end: 15px;
    }
    .userTitle {
        font-size: 20px;
        font-family: "Flamenco", cursive;
        text-transform: capitalize;
        margin-block-end: 15px;
    }    

    @media(min-width: 600px) {
        display: none
    }
`

export const DrawerButton = styled.button`
    border: none;
    text-align: left;
    padding: 10px;
    margin-block: 2px;
    width: 120px;
    font-family: "Nunito", sans-serif;
    background-color: #FFD6B7;
    cursor: pointer;

    &:hover{
        font-weight: 800;
    }
`