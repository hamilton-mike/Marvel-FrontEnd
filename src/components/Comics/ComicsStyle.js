import styled from "styled-components";


export const DivComic = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #BAB9B9;
    outline: 10px solid #000;

    p {
        padding: 0.4em;
        font-size: 15px;
    }

    img {
        max-width: 100%;
    }

    @media (max-width: 375px) {
        p {
            display: none;
        }

        img {
            width: 100%;
        }
    }

     @media (max-width: 414px) {
        p {
            font-size: 20px;
            padding: 10px;
        }

        img {
            width: 100%;
        }
    }
`;
