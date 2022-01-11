import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    max-width: 100%
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    background: #323232;
`;

export const HeadingOne = styled.h1`
    margin-bottom: 2rem;
    width: 100%;
`;

export const Flex = styled.div`
    display: flex;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width:900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const HeroDescription = styled.div`
    margin: 2em;
    width: 50em;
    max-width: 100%;

    p {
        padding: 1em;
    }


    @media (max-width: 600px) {
        margin: 1em;

        p {
            font-size: 0.8em;
        }
    }
`;

export const HeroImg = styled.div`
    margin-left: 5em;

    img {
        border-radius: 2.5rem;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        img {
            border-radius: 50%;
            padding-top: 2em;
            margin: 0;
        }
    }
`;

export const FormDiv = styled.div`
    padding: 2em;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1em;

    @media (max-width: 768px) {
        margin-left: 1em;
    }

`;
