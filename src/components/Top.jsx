import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Top() {
    return (
        <TopHeader>
            <img src={logo}></img>
            <p>ZapRecall</p>
        </TopHeader>

    )
}


const TopHeader = styled.div `
    width: 240px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-top: 48px;
    align-items: center;
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-bottom: 20px;

    img {
        width: 52px;
        height: 60px;
    }
`