import styled from "styled-components";

export const Image = styled.img`
    border-radius: 1rem;
    max-width: 100%;

    &:hover {
        animation: myAnim 0s ease 1s normal forwards;
    }

    @keyframes myAnim {
        0% {
            opacity: 0;
            transform: translateX(250px);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

`;


export const Div = styled.div`
    margin: 0 auto;
    padding: 2em;
    background-color: #007fc7;
    outline: 10px solid #000;
    width: 35em;
    max-width: 60%;

    h3,p {
        margin: 1em 0;
    }
`;

export const UnOrder = styled.ul`
    border-radius: 1rem;
    padding-left: 0.2em;
`;

export const Li = styled.li`
    display: inline-block;
    list-style-type: none;
    margin: 1rem;
    box-shadow: 5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF
`;

//     small {
//         position: relative;
//     }

//     small&::before,
//     small&::after {
//         content: '',
//         position: absolute;
//         top:0;
//         right:0;
//         bottom:0
//         left:0;
//     }

//     small&::before {
//         background: red;
//     }
