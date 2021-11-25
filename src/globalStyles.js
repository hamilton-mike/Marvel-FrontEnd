import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 40em;
`;

export const HeadingOne = styled.h1`
    margin-bottom: 2rem;
    color: ${props => props.theme.color};
    width: 100%;
    text-align: center;
`;
