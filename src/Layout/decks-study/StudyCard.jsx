import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AddCardsButton from "../Deck/DeckButtons/AddCardsButton";

function StudyCard({cards, setCards, deck, routeButtonClick}) {
    const [index, setIndex] = useState(0);
    const [cardDisplay, setCardDisplay] = useState("");
    const [hasFlipped, setHasFlipped] = useState(false);
    const history = useHistory();
    const {deckId} = useParams();

    useEffect(() => {
        if (deck) setCards(deck.cards);
    }, [deck])

    useEffect(() => {
        if (!cards || !cards.length) return;
        setCardDisplay(cards[index].front);
    }, [cards])

    useEffect(() => {
        if (!cards || !cards.length) return;
        setCardDisplay(cards[index].front);
    }, [index])

    const flipCard = () => {
        setHasFlipped(true);
        if (cardDisplay === cards[index].front) {
            setCardDisplay(cards[index].back);
        } else {
            setCardDisplay(cards[index].front)
        }
    }

    const nextCard = () => {
        if (index === cards.length - 1) {
            if (
                window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.")
            ) {
                setIndex(0);
            } else {
                history.push("/");
            }
        } else {
            setIndex((previousIndex) => previousIndex + 1);
        }
    }

    const nextButton = hasFlipped && (<button onClick={() => nextCard()}>Next</button>)

    if (!!cards && cards.length <= 2) {
        return (
            <>
                <h4>Not enough cards</h4>
                <p>You need at least 3 cards to study. There are 2 cards in this deck.</p>
                <AddCardsButton url={`/decks/${deckId}/cards/new`} deckButtonClick={routeButtonClick} />
            </>
        )
    }

    return !!cards && (
        <>
            <h4>Card {index+1} of {cards.length}</h4>
            <p>{cardDisplay}</p>
            <button onClick={() => flipCard()}>Flip</button>
            {nextButton}
        </>
    )
}

export default StudyCard;