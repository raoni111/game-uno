import getRandomNumber from "./services/randomNumber";
import CardProtocol from "./types/CardProtocol";
import { CardType } from "./types/PlayerProtocol";
import TableProtocol from "./types/TableProtocol";

export default class Table implements TableProtocol {
    private cardName: String = '';

    constructor(private readonly tableElement: HTMLDivElement) {}

    addCard(card: CardProtocol): void {
        const x = card.img.x;
        const y = card.img.y;

        card.img.setAttribute('toAppear', 'true')
        this.tableElement.appendChild(card.img);

        this.cardName = card.name;

        this.appendToTableAnimation(x, y, card);
    }

    private appendToTableAnimation(x: number, y: number, card: CardProtocol) {
        card.img.style.top = `${y - (card.img.y - 30)}px`;
        card.img.style.left = `${x - (card.img.x - 650)}px`;

        setTimeout(() => {
            card.img.style.rotate = `${getRandomNumber(-10, 10)}deg`;
            card.img.style.top = `${getRandomNumber(-30, 30)}px`;
            card.img.style.left = `${getRandomNumber(-30, 30)}px`;
        }, 1);
    }
}