import styled from "styled-components";

export const HeroDiv = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 94em;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border: 1rem groove #fa0874;
    background-color: black;
`;

export const MarvelIntro = styled.video`
    width: 100%;
    height: 75%;
    padding: 2em 5em;

    @media (max-width:1000px) {
        padding: 1em 2.5em;
    }
`;

export const LinkWrapper = styled.div`
    max-width: 84em;
    display: flex;
    justify-content: space-around;

`;

export const Button = styled.button`
    cursor: pointer;
    padding: 1em 2em;
    border-radius: 2rem;
    background-color: #6d6e70;

    a {
       text-decoration: none;
       color: #f4a500;
    }
`;
