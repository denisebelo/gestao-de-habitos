import styled, { keyframes } from "styled-components";

const AppearSlow = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

const GroupCreaterContainer = styled.form`
    background-color: #ff8c64;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 50vw;
    max-width: 90vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${AppearSlow};
    animation-duration: 0.4s;

    > section:first-child {
        display:flex;
        flex-direction: column;
        justify-content: space-around;

        > h2 {
            margin-block: 10px;
            font-family: "Flamenco", cursive;
            color: #3B322C;
            text-align: center;
        }

        > input {
            padding: 10px;
            margin-left: 10px;
            min-width: 20vw;
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

        > input + span {
            padding-left: 10px;
            font-size: 10px;
            color: red;
            font-family: "Nunito", sans-serif;
            margin-top: 3px;
        }
    }

    > section + section {
        padding: 0 10px;
        justify-content: center;

        h3 {
            margin-block: 10px;
            font-family: "Flamenco", cursive;
            font-size: 20px;
            font-weight: 500;
            color: #3B322C;
            text-align: center;
        }

        > p {
            margin-block: 10px;
            font-family: "Flamenco", cursive;
            font-size: 20px;
            font-weight: 500;
            color: #3B322C;
            text-align: center;
        }

        > div {
            display:flex;
            margin: 20px 0 25px;
        }

        > div > p {
            margin: 0 10px;
            cursor: pointer;
            margin-block: 10px;
            font-family: "Flamenco", cursive;
            font-size: 16px;
            font-weight: 700;
            color: #3B322C;
            text-align: center;

            .health {
                color: #6558F5;
                border: ${(props) =>
                  props.selectedArray[0] === 1 ? "3px solid #6558F5" : "none"}
            }

            .study {
                color: rgba(246, 72, 37, 1);
                border: ${(props) =>
                  props.selectedArray[1] === 1
                    ? "3px solid rgba(246, 72, 37, 1)"
                    : "none"}
            }

            .work {
                color: #35AE9F;
                border: ${(props) =>
                  props.selectedArray[2] === 1 ? "3px solid #35AE9F" : "none"}
            }
        }

        > div > p > svg {
            padding: 5px; 
            font-size: 47px;
        }

        > button {
            margin-block: 15px;
            width: 200px;
            height: 40px;
            background-color: rgba(246, 72, 37, 1);
            border-radius: 50px;
            border-style: none;
            font-family: "Nunito", sans-serif;
            font-size: 18px;
            color: white;
            cursor: pointer;
        
            &:hover {
              background-color: #FFCCA6;;
              color:rgba(246, 72, 37, 1);
              transition: 0.2s;
            }
    }

    > svg {
        cursor: pointer;
    }

`;

export default GroupCreaterContainer;
