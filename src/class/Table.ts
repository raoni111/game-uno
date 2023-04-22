import getRandomNumber from "./services/randomNumber";
import CardProtocol from "./types/CardProtocol";
import TableProtocol from "./types/TableProtocol";

export default class Table implements TableProtocol {
    private cardName: String = '';

    constructor(private readonly tableElement: HTMLDivElement, private readonly audioElement: HTMLAudioElement) {}

    addCard(card: CardProtocol, index: number): void {
        const x = card.img.x;
        const y = card.img.y;

        this.audioElement.currentTime = 0;
        this.audioElement.volume = 0.2;
        this.audioElement.play();

        card.img.setAttribute('toAppear', 'true')
        this.tableElement.appendChild(card.img);

        this.cardName = card.name;

        this.appendToTableAnimation(x, y, card, index);
    }

    private appendToTableAnimation(x: number, y: number, card: CardProtocol, index: number) {
        card.img.style.top = `${y - (card.img.y)}px`;
        card.img.style.left = `${x - card.img.x}px`;

        console.log(card)

        setTimeout(() => {
            card.img.style.rotate = `${getRandomNumber(-10, 10)}deg`;
            card.img.style.top = `${getRandomNumber(-30, 30)}px`;
            card.img.style.left = `${getRandomNumber(-30, 30)}px`;
        }, 1);
    }
}