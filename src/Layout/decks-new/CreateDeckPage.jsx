import React from "react";
import Breadcrumb from "../Breadcrumb";
import DeckForm from "../Deck/DeckForm";

function CreateDeckPage() {

    return (
        <>
            <Breadcrumb createMode />
            <h2>Create Deck</h2>
            <DeckForm />
        </>
    )
}

export default CreateDeckPage;