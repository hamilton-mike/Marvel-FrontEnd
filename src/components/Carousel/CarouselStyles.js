import styled from 'styled-components';

export const Image = styled.img`
    max-width: 100%;
`;

export const CarouselDiv = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
    border: 2rem solid #BAB9B9;
    background-color: #323232;
    margin: 0 auto;

    @media (max-width: 415px) {
        border: 0.5rem solid #BAB9B9;
    }
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
