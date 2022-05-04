import styled from "styled-components"

export const HabitsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    overflow: auto;

    .DashboardTitle {
        font-size: 35px;
        font-family: "Flamenco", cursive;
        width: 100%;
        margin-block: 20px;
    }

    .habitsButton {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        padding: 12px;
        border-radius: 100px;
        background-color: #FFD6B7;
        font-family: "Nunito", sans-serif;
        font-size: 28px;
        color: white;
        cursor: pointer;

        &:hover {
            background-color: rgba(247, 133, 55, 1);
            transition: 0.2s;
          }

        @media(min-width: 600px) {
            padding: 24px;
            font-size: 36px;
        }
    }

    .habitsExplorer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-block: 15px;
        padding: 10px;
        width: 96%;
        background-color: #FFD6B7;
        border-radius: 5px;

        .habitsCounter {
            font-family: "Nunito", sans-serif;
            font-size: 18px;
            font-weight: bold;
            width: 100%;
            text-align: center;
        }

        .motivationMessage {
            font-family: "Nunito", sans-serif;
            font-size: 16px;
            font-style: italic;
            width: 100%;
            text-align: center;
            margin-block-end: 20px;
        }
    }
`