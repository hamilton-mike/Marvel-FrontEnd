import styled from "styled-components";

export const HeroSection = styled.section`
`;

export const MarvelIntro = styled.video`
    background-color: black;
    padding: 0 5em;
    border: 4rem groove yellow;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;

    @media (max-width: 1000px) {
        padding: 0 1em;
    }
`;

export const Text = styled.p`
    color: red;
`;
