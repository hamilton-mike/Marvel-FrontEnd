import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 40em;
    margin: 0 auto;
    padding: 0 3em;
`;

export const HeadingOne = styled.h1`
    margin-bottom: 2rem;
    color: ${props => props.theme.color};
    width: 100%;
    text-align: center;
`;

export const Button = styled.div`
    cursor: pointer;
    border-radius: 1rem;
    padding: 1em 2em;
    color: ${props => props.theme.color};
    border: 1rem solid ${props => props.theme.borderColor};

    &:hover {
        color: ${props => props.theme.hoverColor};
    }
`;
