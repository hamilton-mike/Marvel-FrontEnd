import styled from "styled-components";

export const StyleFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    position: sticky;
    border: 1em solid #323232;
    background-color: #F1F1F1;



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
        color: #f24437;

        &:hover {
            color: #323232;
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
