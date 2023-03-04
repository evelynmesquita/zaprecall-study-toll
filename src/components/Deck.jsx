import styled from "styled-components"
import { useState } from 'react';

import iconTurn1 from "../assets/seta_play.png"
import iconTurn2 from '../assets/seta_virar.png';
import iconRight from '../assets/icone_certo.png';
import iconError from '../assets/icone_erro.png';
import iconAlmost from '../assets/icone_quase.png';

export default function Deck({ question, answer, index }) {

  const [statusCard, setStatusCard] = useState(1);
  const [finalCard, setFinalCard] = useState(0);

  function closeCard() {
    setStatusCard(statusCard + 1)
  } 

  return (
    <Container>
      {statusCard === 1 ? <Card>
        <div>
          <p>Pergunta {index +1}</p>
          <img onClick = {closeCard} src={iconTurn1}></img></div>
      </Card> : ""}

      {statusCard === 2 ? <CardQuestion>
        <p>{question}</p>
        <img onClick = {closeCard} src={iconTurn2}></img>
      </CardQuestion> : ""}

      {statusCard === 3 ? <CardAnswer>
        <p>{answer}</p>
        <Buttons>
          <button> Não lembrei</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </Buttons>
      </CardAnswer> : ""}
      
    </Container>
  )
}

const Container = styled.div`
  background-color: #FB6B6B;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
`

const Card = styled.div`
 margin-bottom: -95px;

  img {
    width: 20px;
    height: 23px;
    padding-right: 20px;
  }

  div {
  width: 280px;
  height: 65px;
  padding-left: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  font-family: 'Recursive', sans-serif;
  color: #333333;
  }

  > div:last-child {
    margin-bottom: 100px;
  }
`

const CardQuestion = styled.div`
  width: 299px;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 25px;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;

  p {
    margin-top: 18px;
    margin-left: 15px ;
  }

  img {
    width: 30px;
    height: 20px;
    position: absolute;
    top: 105px;
    left: 255px
  }
`

const CardAnswer = styled.div`
  width: 299px;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 25px;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;

  p {
    margin-top: 18px;
    margin-left: 15px ;
  }
`

const Buttons = styled.div`
    /*  */
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 20px;

    > button{
        align-items: center;
        border-radius: 5px;
        border: none;
        color: #ffffff;
        display: flex;
        font-family: 'Recursive', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        justify-content: center;
        line-height: 14px;
        padding: 5px;
        text-align: center;
        width: 90px;

        &:hover{
        filter: brightness(110%) saturate(110%);
        cursor: pointer;
     }
    }
   
    > button:nth-child(1) {
        background-color: #ff3030;
    }
    > button:nth-child(2) {
        background-color: #ff922e;
    }
    > button:nth-child(3) {
        background-color: #2fbe34;
    }
`;
