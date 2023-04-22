import createImgElement from "./services/createImgElement";
import getRandomNumber from "./services/randomNumber";
import {CardType} from "./types/PlayerProtocol";
import DeckProtocol from "./types/DeckProtocol";

import Card from './Card'
import Deck from './Deck';

export default class Player {;
    public deck: DeckProtocol;

    constructor(private readonly deckElement: HTMLDivElement) {
        this.deck = new Deck(deckElement);
    }

    public play() {
        this.deck
    }

}