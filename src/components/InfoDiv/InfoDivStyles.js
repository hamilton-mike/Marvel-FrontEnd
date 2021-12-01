import styled from "styled-components";

export const Image = styled.img`
    border-radius: 1rem;
    max-width: 100%;
    @media (max-width:900px) {
        height: 8rem;
    }
`;


    export const Div = styled.div`
    margin: 0 auto;
    padding: 2em;
    background-color: #007fc7;
    outline: 10px solid #000;
    max-width: 100%
    width: 85%;

    h3, p {
        margin: 0.7em 0;
    }

    p {
        font-size: 20px;
    }

    @media (max-width:1300px) {
        p {
            display: none;
        }
    }
`;

export const UnOrder = styled.ul`
    border-radius: 1rem;
    padding-left: 0.2em;
`;

export const Li = styled.li`
    font-size: 18px;
    display: inline-block;
    list-style-type: none;
    margin: 0.3em;
    box-shadow: 2px 2px 0px 0px #289FED, 5px 5px 0px 0px #5FB8FF
`;
