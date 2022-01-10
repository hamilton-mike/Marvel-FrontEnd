import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 1em;
    width: 100%;
`;

export const Select = styled.select`
    margin: 1em;
`;

export const Form = styled.form`
    padding: 1em;
    border-radius: 2rem;
    background-color: #F1F1F1;
;
    display: flex;
    align-items: center;
`;

export const SearchGrid = styled.div`
    padding: 6em 2em 2em 2em;
    color: white;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const Card = styled.div`
    align-content: center;
    text-align: center;

    ul {
        display: none;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: white;

    }

    button {
        border-radius: 2rem;
        padding: 0.3em;
        color: white;
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
