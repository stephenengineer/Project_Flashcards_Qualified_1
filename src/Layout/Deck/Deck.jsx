import React, { useEffect, useState } from "react";
import ViewButton from "./DeckButtons/ViewButton";
import StudyButton from "./DeckButtons/StudyButton";
import EditButton from "./DeckButtons/EditButton";
import DeleteButton from "./DeckButtons/DeleteButton";
import { listCards } from "../../utils/api";

function Deck({deck, deleteClick, deckButtonClick}) {
    const [deckCards, setDeckCards] = useState([]);
    const baseUrl = `/decks/${deck.id}`;

    useEffect(() => {
        const abortController = new AbortController();
        listCards(deck.id, (new AbortController()).abort())
        .then(setDeckCards)

        return () => abortController.abort();
    }, []);
    
    return (
        <div className="card col-12 col-md-4 rounded-0">
            <div className="card-body">
                <h5 className="card-title">
                    {deck.name}
                </h5>
                <p>{deck.description}</p>
                <small className="text-muted">{deck.cards.length} cards</small>
                <ViewButton url={baseUrl} deckButtonClick={deckButtonClick} />
                <StudyButton url={`${baseUrl}/study`} deckButtonClick={deckButtonClick} />
                <EditButton url={`${baseUrl}/edit`} deckButtonClick={deckButtonClick} />
                <DeleteButton deleteDeckClick={deleteClick} deckId={deck.id} />
            </div>
        </div>
    )
}

export default Deck;