import styled from "styled-components";

export const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 220px;
    padding: 15px;
    background-color: #9DD694;
    color: white;
    border: none;
    border-radius: 5px;
    margin-block-end: 10px;
    margin-inline: 10px;
    font-family: "Nunito", sans-serif;

    h1 {
        font-size: 18px;
        text-transform: uppercase;
        text-align: center;
    }

    h3 {
        font-size: 14px;
        font-weight: 400;
    }

    .activitiesSection {
        background-color: white;
        width: 100%;
        margin-block-start: 5px;

        .groupSectionTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            background-color: #459638;
            width: 100%;
            padding: 5px;

            svg {
                font-size: 20px;
                cursor: pointer;
                display: relative;
            }
        }
    }

    .goalsSection {
        background-color: white;
        width: 100%;
        margin-block-start: 5px;

        .groupSectionTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            background-color: #459638;
            width: 100%;
            padding: 5px;

            svg {
                font-size: 20px;
                cursor: pointer;
                display: relative;
            }
        }
    }

    .noContentMessage {
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-family: "Nunito", sans-serif;
        background-color: white;
        color: black;
        width: 100%;
    }

    button {
        margin-inline: 3px;
        margin-block: 5px;
        cursor: pointer;
        padding: 8px;
        border: none;
        outline: none;
        background-color: #6FB864;
        border-radius: 50px;
        color: white;
        font-size: 10px;
        font-weight: bold;
        font-family: "Nunito", sans serif;

        &:hover {
            background-color: #C6E8C1;
            color: black;
            transition: 0.4s;
        }
    }

    .disabled {
        background-color: #E5E5E5;
        color: #666;
        font-style: italic;

        &:hover {
            background-color: #E5E5E5;
            color: #666;
            font-style: italic;
            cursor: initial;
        }
    }
`