import styled from "styled-components";

export const Section = styled.section`
    text-align: center;
    background-color: purple;
    margin: 3em;
    max-width: 70em;

    @media (max-width:1100px) {
        flex-direction: column;
        margin: 0 auto;
    }

`;

export const Div = styled.ul`
    display: flex;
    width: 100%;

    span {
        color: #f24437;
    }

    li {
        list-style-type: none;
        padding: 1em;
    }

    li:nth-child(1) {background-color: #BAB9B9}
    li:nth-child(2) {background-color: #E4E4E4}
    li:nth-child(3) {background-color: #BAB9B9}
    li:nth-child(4) {background-color: #E4E4E4}

    @media (max-width:1100px) {
        flex-direction: column;
    }

`;
