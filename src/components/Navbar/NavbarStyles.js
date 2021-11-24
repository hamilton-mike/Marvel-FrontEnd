import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #007fc7;
    color: white;
    width: 100%;
    justify-content: space-around;
    padding: 1em;
    border: 2px solid yellow;

    ul {
        display: flex;
        list-style-type: none;
        cursor: pointer;
    }

    img {
        border-radius: 5rem;
        max-width: 100%;
    }
`;
