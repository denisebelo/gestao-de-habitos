import styled from 'styled-components';

const ListContainer = styled.li`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    background-color: #FFCCA6;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;

    > p {
        flex-basis: 60%;
        font-family: "Nunito", sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: #3B322C;
        text-align: left;
    }

    > button {
        margin-inline: 3px;
        cursor: pointer;
        padding: 8px;
        border: none;
        outline: none;
        background-color: rgba(246, 72, 37, 1);
        border-radius: 50px;
        color: white;
        font-size: 10px;
        font-weight: bold;
        font-family: "Nunito", sans serif;
      
        &:hover {
          background-color: rgba(247, 133, 55, 1);
        }
    }

    .disabledButton {
        background-color: #E5E5E5;
        color: #666;
        font-style: italic;

        &:hover {
            background-color: #E5E5E5;
            color: #666;
            font-style: italic;
            cursor: default;
        }
    }
`;

export default ListContainer;