import styled from "styled-components";

export const HabitContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 220px;
    padding: 15px;
    background-color: #63A1DD;
    color: white;
    border: none;
    border-radius: 5px;
    margin-block-end: 10px;
    margin-inline: 10px;
    font-family: "Nunito", sans-serif;

    h1 {
        font-size: 20px;
    }

    h3 {
        font-size: 12px;
        font-weight: 400;
    }

    > div {
        font-size: 18px;
        text-align: center;
        margin: 10px 0;
    }

    > div > .circleContainer {
        width: 100px;
        margin-block-start: 10px;
    }

    .progressEdit {
        display:flex;
        justify-content: center;
        width: 100px;
    }

    .HabitButtons {
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }

    .reset {
        margin-inline: 3px;
        margin-block: 5px;
        cursor: pointer;
        padding: 8px;
        border: none;
        outline: none;
        background-color: #37C57E;
        border-radius: 50px;
        color: white;
        font-size: 10px;
        font-weight: bold;
        font-family: "Nunito", sans-serif;

        &:hover {
            background-color: #3FDA99;
            color: black;
            transition: 0.4s;
        }
    }

    button {
        margin-inline: 3px;
        margin-block: 5px;
        cursor: pointer;
        padding: 8px;
        border: none;
        outline: none;
        background-color: #2073C3;
        border-radius: 50px;
        color: white;
        font-size: 10px;
        font-weight: bold;
        font-family: "Nunito", sans-serif;

        &:hover {
            background-color: #91BFEB;
            color: black;
            transition: 0.4s;
        }
    }
`;