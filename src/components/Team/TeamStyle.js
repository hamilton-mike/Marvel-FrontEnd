import styled from 'styled-components'

export const Section = styled.section`
    color: white;
`;

export const FlexDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 2em;
`;

export const Line = styled.div`
    border: 2px solid blue;
`;

export const ChilDiv = styled.div`
    outline: 10px solid #000;
    background-color: #BAB9B9;
    padding: 0 1em;
    margin: auto;
    color: #323232;

    p {
        flex: direction: column;

    }
`;

export const Modify = styled.div`
    margin: 1em;
    cursor: pointer;
    max-width: 2em;
`;
