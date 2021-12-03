import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 4em;
    width: 100%;
`;

export const Form = styled.form`
    padding-left: 1em;
    border-radius: 2rem;
    background-color: red;
    display: flex;
    align-items: center;
`;

export const FormDiv = styled.div`
    background-color: green;
    padding: 0.4em;
    border-radius: 3rem;

    &:hover {
        background-color: yellow;
    }
`;

export const SearchGrid = styled.div`
    padding: 6em 2em 2em 2em;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 3px solid brown;
`;

export const Card = styled.div`
    align-content: center;
    text-align: center;
    border: 3px solid brown;

    ul {
        display: none;
    }

    li {
        list-style-type: none;
    }
    button {
        border-radius: 2rem;
        padding: 0.3em;
        color: blue;
        cursor: pointer;
    }

    &:hover {
        ul {
            display: flex;
            justify-content: space-around;
        }
    }

    p {
        padding-top: 1em;
        font-size: 20px;
    }

    ul {
        padding: 1em 0;
    }

    img {
        max-width: 100%;
        border-radius: 2rem;
        animation: myAnim 2s ease-in-out 0s 1 normal forwards;

    }


    @keyframes myAnim {
        0%, 50%, 100% { opacity: 1; }

        25%, 75% { opacity: 0; }
    }
`;
