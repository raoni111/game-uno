import CardProtocol from './types/CardProtocol'
import DeckProtocol from './types/DeckProtocol';
import {Howl, Howler} from 'howler';

export default class Deck implements DeckProtocol {
    private _deck: CardProtocol[] = [];
    private stack = document.getElementById('stack-cards') as HTMLDivElement;

    constructor(private readonly deckElement: HTMLDivElement) {}

    get get(): CardProtocol[] {
        return this._deck;
    }

    deleteCard(index: number) {
        delete this._deck[index];
    }

    public add(card: CardProtocol, stackAnimation?: boolean) {
        this._deck.push(card);

        return this._deck;
    }

    public setDeck() {
        this.deckElement.innerHTML = '';
        this.toAppear();
        this._deck.map((card) => {
            this.deckElement.appendChild(card.img);
        })

        console.log(this._deck);
    }

    public playAudio() {
        const audio = new Howl({
            src: './audio/card-soud.wav',
        });

        audio.play();
    }

    private toAppear() {
        let index = 0;

        const intervalImg = setInterval(() => {
            if (index >= this._deck.length) {
                clearInterval(intervalImg);
                return;
            }

            const x = `${((window.innerWidth * 30) / 100) + (120 * index)}px`;
            const y = `${window.innerHeight - 200}px`;

            this._deck[index].setPosition(x, y);
            index++;
        }, 100);
    }

    
}