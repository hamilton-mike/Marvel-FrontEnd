import styled from "styled-components";

export const HomeDiv = styled.div`
    width: 100%;
    max-width: 94em;
    margin: 0 auto;
    background-color: grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
    padding-top: 17%;

    img {
        margin-top: 1em;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1200px) {
        padding: 1em;
        flex-direction: column;
        padding-top: 40%;

        img {
            padding-top: 3em;
        }
    }
`;


export const Button = styled.button`
    box-shadow: 3px 4px 0px 0px #8a2a21;
	background: linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
    border-radius: 0.3rem;
    padding: 0.2em;
    margin-top: 0.5em;

    &:hover {
        cursor: pointer;
        background: linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
        background-color:#f24437;
    }

    &:active {
        position:relative;
        top:1px;
    }
`;
