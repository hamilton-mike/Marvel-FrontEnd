import styled from 'styled-components';

export const Image = styled.img`
    max-width: 100%;
`;

export const CarouselDiv = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%
    width: 85%;
    overflow: hidden;
    border: 2rem solid orange;
    background-color: black;
    margin: 0 5em;

`;

export const UnorderList = styled.ul`
    list-style: none;
    display: flex;
    animation: scrolling 20s linear infinite;

    @keyframes scrolling {
        0% { transform: translateX(0) ;}
        100% { transform: translateX(-180%) ;}
    }
`;

export const ListItem = styled.li`
    border: 1rem solid black;
    display: flex;
    justify-content: center;
    width: 15%;
    flex-shrink: 0;
`;
