import styled from "styled-components";


export const DivEvents = styled.div`
    margin: 0 auto 3em auto;
    display: grid;
    // grid-template-columns: repeat(${props => props.num / 2}, 1fr);
    grid-template-columns: repeat(10, 1fr);

    background-color: #BAB9B9;
    outline: 10px solid #000;

    p {
        padding: 10px;
    }

    img {
        max-width: 100%;
    }
`;

export const H2 = styled.h2`
    padding: 1em;
    color: white;
`;

export const Unknown = styled.p`
    margin: 0 auto 3em auto;
    padding: 1em;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #BAB9B9;
    outline: 10px solid #000;
`;
