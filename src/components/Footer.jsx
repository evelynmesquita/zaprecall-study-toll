import styled from "styled-components"

import cards from '../cards';

export default function Footer() {
    const numberQuestions = cards.length;

    return (
        <FooterStyle>
            <p>/{numberQuestions} CONCLUÍDOS</p>
        </FooterStyle>

    )
}

const FooterStyle = styled.div `
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: absolute;
    bottom: 0;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    z-index: 1;
    position: fixed;
`