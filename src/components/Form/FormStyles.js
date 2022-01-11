import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5em;
    padding: 2em;
    border-radius: 2rem;
    color: #323232;
    background-color: #F1F1F1;
    outline: 10px solid #000;

    @media (max-width: 1068px) {
        label {
            font-size: 25px;
        }
        flex-direction: column;
    }

    @media (max-width: 800px) {
        outline: 5px solid #000;
        margin: 0;
    }
`;

export const Select = styled.select`
    margin: 1em;
`;

export const Form = styled.form`
    align-items: center;
    @media (max-width: 1000px) {
        input, button {
            margin-left: 1em;
        }

        input {
            width: 70%;
        }
    }
`;

export const SearchGrid = styled.div`
    padding: 6em 2em 2em 2em;
    color: white;
`;

export const Cards = styled.div`
    padding-top: 5em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6rem;
    width: 100%;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;


export const Card = styled.div`
    align-content: center;
    text-align: center;
    cursor: pointer;

    a {
        text-decoration: none;
        color: white;
    }

    p {
        padding: 1em;
        font-size: 20px;
    }

    &:hover {
        background-color: #BAB9B9;
        outline: 10px solid #000;
        color: #000;

        ul {
            display: flex;
            justify-content: center;
        }
    }

    @keyframes myAnim {
        0%, 50%, 100% { opacity: 1; }
        25%, 75% { opacity: 0; }
    }
`;

export const Unorder = styled.ul`
    display: none;

    li {
        list-style-type: none;
    }
`;

export const Img = styled.img`
    border-radius: 4rem;
    animation: myAnim 2s ease-in-out 0s 1 normal forwards;
`;
