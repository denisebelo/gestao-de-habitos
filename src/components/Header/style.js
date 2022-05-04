import styled from "styled-components";

export const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 30px 0;
    background-color: #FFD6B7;
    margin-block-start: 0;

    .MenuButton {
        align-self: center;
        font-size: 25px;
        margin-inline-start: 10px;
        cursor: pointer;

        &:active {
            color: rgba(246, 72, 37);
            transition: 0.4s;
        }
    }

    .HeaderLogo {
        margin-inline-start: 15px;
        cursor: pointer;
        display: flex;
        align-itens: center;
        font-family: 'Flamenco', cursive;

        .Logo1 {
            color: rgba(246, 72, 37);
            font-size: 30px;
        }

        .Logo2 {
            font-weight: 400;
            font-size: 30px;
        }
    }

    .HeaderButtons {
        margin-inline-end: 10px;
        
        h5 {
            font-weight: 400;
            font-size: 12px;

            a {
                color: rgba(246, 72, 37, 1);
                cursor: pointer;
            }
        }
    }

    @media(min-width: 600px) {
        .MenuButton {
            display: none;
        }

        .HeaderButtons {
            margin-inline-end: 20px;

            h5 {
                font-size: 18px;
            }
        }

        .HeaderLogo {
            margin-inline-start: 20px;

            .Logo1 {
                font-size: 40px;
            }
    
            .Logo2 {
                font-size: 40px;
            }
        }
    }
`