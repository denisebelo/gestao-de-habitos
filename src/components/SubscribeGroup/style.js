import styled, { keyframes } from 'styled-components';

const AppearSlow = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

const SubscribeContainer = styled.div`
    width: 90vw;
    max-width: 1000px;
    background-color: #ff8c64;
    margin: 30px auto;
    max-height:85vh;
    overflow-y: auto;
    padding: 0 10px 10px;
    border-radius: 5px; 
    min-width: 270px;
    max-width: 90vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    animation: ${AppearSlow};
    animation-duration: 0.4s;

    > header {
        padding: 10px;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    > header > input {
        padding: 10px;
        margin-inline: 5px;
        min-width: 30vw;
        font-family: "Nunito";
        font-size: 14px;
        margin-block-start: 10px;
        border-radius: 5px;
        outline: none;
        color: black;
        border: 1px solid rgb(0,0,0, 0.2);
        background-color: #ff8c64;

        &:hover {
            border: 1px solid black;
        }
    }

    > header > svg {
        font-size: 20px;
        cursor: pointer;
        color: #3B322C;
        margin-block-start: 8px;
        margin-inline-start: 5px;
    }

    > main > p {
        background-color: #FFCCA6;
        border: none;
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        font-style: italic;
        font-family: "Nunito", sans-serif;
        font-size: 16px;
        margin-block: 20px;
    }

    @media(min-width: 600px) {
        max-width: 50vw;
    }

    .no-italic{
        font-style: normal;
    }
`;

export default SubscribeContainer;