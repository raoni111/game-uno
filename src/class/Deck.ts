import CardProtocol from './types/CardProtocol'
import DeckProtocol from './types/DeckProtocol';
import {Howl} from 'howler';
import PlayerProtocol, { NamePlayerType } from './types/PlayerProtocol';

export default class Deck implements DeckProtocol {
    private _deck: CardProtocol[] = [];
    private stack = document.getElementById('stack-cards') as HTMLDivElement;

    private readonly deckPosition: Record<NamePlayerType, {y: number, x: number}> = {
        bot1: {
            y: 950,
            x: 120
        },
        bot2: {
            y: 0,
            x: 0
        },
        bot3: {
            y: 0,
            x: 0
        },
        bot4: {
            y: 0,
            x: 0
        },
        Player1: {
            y: 200,
            x: 120
        },
        Player2: {
            y: 0,
            x: 0
        },
        Player3: {
            y: 0,
            x: 0
        },
        Player4: {
            y: 0,
            x: 0
        },
    }

    constructor(private readonly deckElement: HTMLDivElement, private readonly player: PlayerProtocol) {}

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
            this.deckElement.appendChild(card.img());
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

            const x = `${((window.innerWidth * 30) / 100) + (this.deckPosition[(this.player.name) as NamePlayerType].x * index)}px`;
            const y = `${window.innerHeight - this.deckPosition[(this.player.name) as NamePlayerType].y}px`;

            this._deck[index].setPosition(x, y);
            index++;
        }, 100);
    }

    
}