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
    grid-template-columns: repeat(4, 1fr)
`;

export const Card = styled.div`
    border: 3px solid brown;
    align-content: center;
    text-align: center;

    p {
        font-size: 20px;
        padding-top: 3em;
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
