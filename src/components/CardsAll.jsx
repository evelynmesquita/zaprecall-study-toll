import cards from '../cards';
import Deck from './Deck';

export default function CardsAll({ finalizadas, setFinalizadas }) {
    return (cards.map((card, index) =>
        <Deck
            key={card.question}
            question={card.question}
            answer={card.answer}
            index={index}
            finalizadas={finalizadas}
            setFinalizadas={setFinalizadas}
        />));
}