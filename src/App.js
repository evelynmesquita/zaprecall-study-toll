import Deck from "./components/Deck";
import Footer from "./components/Footer";
import Top from "./components/Top"
import cards from "./cards";

import { useState } from "react";
import styled from "styled-components"
import CardsAll from "./components/CardsAll";

export default function App() {
  const [doneCards, setDoneCards] = useState([]);
  
  return (
    <Root>
      <ContainerCards>
        <Top />

        <CardsAll doneCards={doneCards} setDoneCards={setDoneCards}/>
      </ContainerCards>

      <Footer doneCards={doneCards}/>

    </Root>
  );
}


const Root = styled.div`
  width: 100%;
  height: 950px;
  position: relative;
  background-color: #FB6B6B;
`

const ContainerCards = styled.div`
  z-index: 3;
  height: 100%;
`

