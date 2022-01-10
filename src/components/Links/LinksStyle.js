import styled from "styled-components";

export const Url = styled.div`
        padding: 1em;
        margin: 1em;

        a {
                text-decoration: none;
                color: white;
        }

        @media (max-width: 360px) {
                padding: 1em 0 0 0;
        }

        @media (max-width: 414px) {
                margin: 0;

                a {
                        font-size: 23px;
                }
        }
`;
