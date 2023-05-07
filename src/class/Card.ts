import createImgElement from './services/createImgElement';
import CardAnimation from './CardAnimation';
import { CardType } from './types/PlayerProtocol'
import CardAnimationProtocol from './types/CardAnimationProtocol';

export default class Card {
    private _img: HTMLImageElement;
    private _name: string;
    private _color: string;
    
    public href: string;

    public index: number;

    cardAnimation: CardAnimationProtocol = new CardAnimation(this);

    private stack = document.getElementById('stack-cards') as HTMLDivElement;

    constructor(card: CardType, index: number, private defaultImg: string = '') {
        if (!defaultImg) {
            this._img = createImgElement(card.image);
        } else {
            this._img = createImgElement(defaultImg)
        }
        

        this.href = card.image;
        this._name = card.name;
        this._color = card.color;
        this.index = index;
    }

    img(skip: boolean = false): HTMLImageElement {
        if (!skip) {
            this.toAppear();
        }

        return this._img;
    }

    get name(): string {
        return this._name
    }

    get color(): string {
        return this._color;
    }

    private toAppear(): void {
        const coordinateY = this.stack.style.top;
        const coordinateX = this.stack.style.left;

        this.setPosition(coordinateX, coordinateY);
    }

    public setPosition(x: string, y: string): void {
        this._img.style.top = y;
        this._img.style.left = x;
    }

    public get y(): string {
        return this._img.style.top;
    }
    public get x(): string {
        return this._img.style.left;
    }

} 