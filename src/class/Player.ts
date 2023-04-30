import PlayerProtocol, { NamePlayerType } from "./types/PlayerProtocol";
import DeckProtocol from "./types/DeckProtocol";

import Card from './Card'
import Deck from './Deck';

export default class Player implements PlayerProtocol {;
    public deck: DeckProtocol;

    constructor(private readonly deckElement: HTMLDivElement, public readonly name: NamePlayerType) {
        this.deck = new Deck(this.deckElement, this);
    }

    public play() {
        this.deck
    }

}