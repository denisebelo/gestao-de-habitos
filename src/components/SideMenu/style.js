import styled from "styled-components";

export const MenuContainer = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
    margin-block-start: -15px;

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

    @media(max-width: 600px) {
        display: none
    }
`

export const MenuButton = styled.button`
    border: none;
    text-align: left;
    padding: 6px 10px;
    margin-block: 2px;
    width: 120px;
    font-family: "Nunito", sans-serif;
    background-color: #FFD6B7;
    cursor: pointer;

    &:hover {
        font-weight: 800;
    }

    &:active{
        font-weight: 800;
        background-color: rgba(247, 133, 55, 1);
        transition: 0.2s;
    }
`