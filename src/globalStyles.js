import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    max-width: 100%
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    background: #323232;
;
`;

export const HeadingOne = styled.h1`
    margin-bottom: 2rem;
    width: 100%;
`;

export const Flex = styled.div`
    display: flex;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width:900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
