import React from "react";
import Breadcrumb from "../Breadcrumb";
import StudyCard from "./StudyCard";

function DeckStudyPage({cards, setCards, routeButtonClick, deck, setDeck}) {

    return (
        <>
            <Breadcrumb deck={deck} type="Study" />
            <h2>Study: {deck.name}</h2>
            <StudyCard cards={cards} setCards={setCards} deck={deck} routeButtonClick={routeButtonClick} />
        </>
    )
}

export default DeckStudyPage;