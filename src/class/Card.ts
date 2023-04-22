import createImgElement from './services/createImgElement';
import CardAnimation from './CardAnimation';
import { CardType } from './types/PlayerProtocol'
import CardAnimationProtocol from './types/CardAnimationProtocol';

export default class Card {
    private _img: HTMLImageElement;
    private _name: string;

    public index: number;

    cardAnimation: CardAnimationProtocol = new CardAnimation(this);

    constructor(card: CardType, index: number) {
        this._img = createImgElement(card.image);
        this._name = card.name;
        this.index = index;
    }

    get img(): HTMLImageElement {
        this.toAppear();

        return this._img;
    }

    get name(): string {
        return this._name
    }

    private toAppear(): void {
        this._img.setAttribute('toAppear', 'false');
    } 

} 