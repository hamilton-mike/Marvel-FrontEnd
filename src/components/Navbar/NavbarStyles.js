import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #007fc7;
    color: white;
    width: 100%;
    padding: 1em;
    border: 2px solid yellow;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ul li {
        display: inline;
        list-style-type: none;
        cursor: pointer;
        padding: 0 1em;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    li:hover {
        color: black;
    }


    img {
        border-radius: 5rem;
        max-width: 100%;
        height: 5em;
        margin-bottom: 1em;
    }
`;
