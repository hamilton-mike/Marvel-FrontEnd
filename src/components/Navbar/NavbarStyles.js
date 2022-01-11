import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #F1F1F1;
    color: #f24437;
    width: 100%;
    padding: 1em;
    border: 1em solid #323232;
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
        color: #f24437;

        &:hover {
            color: #323232;
            text-decoration: underline;

        }
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
    max-width: 40em;
    width: 70%;
    padding: 2em 0 0 4em;

    li, a {
        justify-content: center;
        display: flex;
        font-size: 3rem;
    }

    @media (max-width: 600px) {
        .hamburger {
            display: flex;
        }
    }
`;
