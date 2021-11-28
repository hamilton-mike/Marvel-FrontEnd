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
`;

export const UnorderList = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    animation: scrolling 20s linear infinite;

    @keyframes scrolling {
        0% { transform: translateX(0) ;}
        100% { transform: translateX(-180vw) ;}
    }
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    border: 6px solid orange;
    width: 15%;
    flex-shrink: 0;
`;
