import styled from "styled-components";

export const Section = styled.section`
    text-align: center;
    padding-top: 1em;
    background-color: purple;
`;

export const Div = styled.ul`
    display: flex;
    margin-top: 3em;

    li {
        list-style-type: none;
        padding: 1em;
    }

    li:nth-child(1) {background-color: yellow}
    li:nth-child(2) {background-color: red}
    li:nth-child(3) {background-color: green}
    li:nth-child(4) {background-color: blue}

    @media (max-width:700px) {
        flex-direction: column;s
    }

`;
