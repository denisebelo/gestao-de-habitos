import styled from "styled-components";

export const GoalBox = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    background-color: #C6E8C1;
    width: 100%;
    color: black;

    .goalTitle {
        margin-inline-end: 5px;
    }

    .goalButtons {
        display: flex;
        align-items: center;

        button {
            border-radius: 50px;
            border: none;
            outline: none;
            padding: 3px 4px;
            margin-inline-start: 3px;
            background-color: transparent;
            color: #458752;
            font-size: 18px;
            cursor: pointer;
            text-align: left;
        }
    }
`