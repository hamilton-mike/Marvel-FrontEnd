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
    position: relative;
    color: ${props => props.theme.color};
    border: 1rem solid ${props => props.theme.borderColor};

    &:before {
        background: #bbb;
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        transform: translate(-50%, -50%) rotate(45deg);
        transition: all 0.7s ease;
        width: 100%;
    }

    &:hover:before {
        height: 1000%;
    }

    &:hover {
        color: ${props => props.theme.hoverColor};
    }
`;
