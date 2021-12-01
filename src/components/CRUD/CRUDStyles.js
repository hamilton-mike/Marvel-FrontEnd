import styled from "styled-components";

export const Section = styled.section`
    text-align: center;
    background-color: purple;
    margin: 3em;
`;

export const Div = styled.ul`
    display: flex;
    // margin: 3em;

    li {
        list-style-type: none;
        padding: 1em;
    }

    li:nth-child(1) {background-color: yellow}
    li:nth-child(2) {background-color: red}
    li:nth-child(3) {background-color: green}
    li:nth-child(4) {background-color: blue}

    @media (max-width:900px) {
        flex-direction: column;
    }

`;
