import styled from "styled-components";

export const StyleFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 1em;
    border: 2px solid red;

    ul {
        display: flex;
        list-style-type: none;
    }

    li {
        padding: 0.4em 0;
        margin-left: 1em;

    }

    a {
        text-decoration: none;

        &:hover {
            color: black;
            text-decoration: underline;

        }
    }

    img {
        max-width: 100%;
        border-radius: 2rem;
        height: 5em;
    }

    @media (max-width:999px) {
        img {
            height: 2em;
        }

        li, a {
            font-size: 17px;
        }
        flex-direction: column;
    }
`;
