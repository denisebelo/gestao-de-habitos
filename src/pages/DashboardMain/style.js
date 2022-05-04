import styled from "styled-components";

export const DashboardMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .DashboardTitle {
        font-size: 35px;
        font-family: "Flamenco", cursive;
        width: 100%;
        margin-block: 20px;
    }

    .mainHabits {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        width: 96%;
        min-height: 30vh;
        margin-block: 5px;
        border-radius: 5px;
    }

    .mainGroups {
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: flex-start;
        width: 96%;
        min-height: 30vh;
        margin: 5px;
        border-radius: 5px;
    }

    .noHabitsMessage {
        font-family: "Nunito", sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    .habitsMinicard {
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
            font-size: 18px;
            text-align: center;
        }
    
        h3 {
            font-size: 14px;
            font-weight: 400;
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
            font-family: "Nunito", sans serif;

            &:hover {
                background-color: #91BFEB;
                color: black;
                transition: 0.4s;
            }
        }
    }

    .groupsMinicard {
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
    }
`