import styled from "styled-components";


export const DivEvents = styled.div`
    margin: 0 auto 3em auto;
    background-color: #BAB9B9;
    outline: 10px solid #000;

    p {
        padding: 10px;
        font-size: 0.8em;
    }

    img {
        max-width: 100%;
    }

    @media (max-width: 500px) {
        p {
            margin: 1em;
        }
        display: inline-block;
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        overflow: auto;

        p {
            padding: 1em;
        }
    }

    @media (max-width: 1024px) {
        padding: 0;
        overflow: auto;
    }
`;

export const H2 = styled.h2`
    padding: 1em;
    color: white;
`;
