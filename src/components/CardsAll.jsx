import cards from '../cards';
import Deck from './Deck';

export default function CardsAll({ doneCards, setDoneCards }) {

    return (cards.map((card, index) =>
        <Deck
            key={card.question}
            question={card.question}
            answer={card.answer}
            index={index}
            doneCards={doneCards}
            setDoneCards={setDoneCards}
        />));
}