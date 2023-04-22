import CardProtocol from './types/CardProtocol'
import DeckProtocol from './types/DeckProtocol';
import {Howl, Howler} from 'howler';

export default class Deck implements DeckProtocol {
    private _deck: CardProtocol[] = [];
    private stack = document.getElementById('stack-cards') as HTMLDivElement;

    constructor(private readonly deckElement: HTMLDivElement) {}

    get get(): CardProtocol[] {
        this.toAppear();
        return this._deck;
    }

    public add(card: CardProtocol, stackAnimation?: boolean) {
        this._deck.push(card);

        return this._deck;
    }

    public setDeck() {
        this.deckElement.innerHTML = '';

        this._deck.map((card) => {
            this.deckElement.appendChild(card.img);
        })
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
            this._deck[index].img.setAttribute('toAppear', 'true');
            index++;
        }, 100);
    }

    
}