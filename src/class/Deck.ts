import CardProtocol from './types/CardProtocol'
import DeckProtocol from './types/DeckProtocol';

export default class Deck implements DeckProtocol {
    private _deck: CardProtocol[] = [];

    constructor(private readonly deckElement: HTMLDivElement) {}

    get get(): CardProtocol[] {
        this.toAppear();
        return this._deck;
    }

    public add(card: CardProtocol) {
        this._deck.push(card);

        return this._deck;
    }
    public setDeck() {
        this.deckElement.innerHTML = '';

        this._deck.map((card) => {
            this.deckElement.appendChild(card.img);
        })
    }

    private toAppear() {
        let index = 0;

        const intervalImg = setInterval(() => {
            if (index >= this._deck.length) {
                clearInterval(intervalImg);
                return;
            }
            this._deck[index].img.setAttribute('toAppear', 'true');
            index++;
        }, 300);
    }

    
}