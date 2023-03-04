import Deck from "./components/Deck";
import Footer from "./components/Footer";
import Top from "./components/Top"
import cards from "./cards";

import { useState } from "react";
import styled from "styled-components"
import CardsAll from "./components/CardsAll";

export default function App() {
  const [finalizadas, setFinalizadas] = useState([]);
  
  return (
    <Root>
      <ContainerCards>
        <Top />

        <CardsAll/>
      </ContainerCards>

      <Footer />

    </Root>
  );
}


const Root = styled.div`
  width: 375px;
  height: 667px;
  position: relative;
  background-color: #FB6B6B;
`

const ContainerCards = styled.div`
  overflow-y: scroll;
  z-index: 3;
  height: 100%;
`

