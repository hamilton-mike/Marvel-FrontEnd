import styled from "styled-components";

export const QuizContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    background-color: #BAB9B9;
    padding: 1em;
    border-radius: 1rem;

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Header = styled.div`
    margin: 1em auto;
    display: flex;
    justify-content: center;

`;

export const Question = styled.div`
    border-radius: 1rem;
    text-align: center;

    p {
        padding-top: 1em;
    }
`;
