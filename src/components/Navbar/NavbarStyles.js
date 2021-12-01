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
    position: fixed;
    z-index: 1;

    li {
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
        height: 2em;
    }

    .hamburger {
        display: none;
    }

    @media (max-width: 800px) {
        img {
            height: 3rem;
            width:100%;
        }

        .unorder {
            display: none;
        }

        .hamburger {
            display: flex;
        }
    }
`;

export const Hamburger = styled.ul`
    height: 100vh;
    width: 100vw;
    padding-top: 6em;

    li, a {
        justify-content: center;
        display: flex;
        align-items: center;
        font-size: 4rem;
    }

    @media (max-width: 600px) {
        .hamburger {
            display: flex;
        }
    }
`;
