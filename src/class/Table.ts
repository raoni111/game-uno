import getRandomNumber from "./services/randomNumber";
import CardProtocol from "./types/CardProtocol";
import TableProtocol from "./types/TableProtocol";

export default class Table implements TableProtocol {
    public cardActive: CardProtocol;

    private tableContent = document.getElementById('table-content');

    constructor(public readonly tableElement: HTMLDivElement, private readonly audioElement: HTMLAudioElement) {
        this.tableContent.style.top = `${(window.innerHeight * 40) / 100}px`
        this.tableContent.style.left = `${(window.innerWidth * 50) / 100}px`
    }

    addCard(card: CardProtocol, index: number): void {
        const x = card.x;
        const y = card.y;
        this.audioElement.currentTime = 0;
        this.audioElement.volume = 0.2;
        this.audioElement.play();
        
        
        card.img().setAttribute('toAppear', 'true')
        this.tableElement.appendChild(card.img());
        
        this.cardActive = card;

        this.appendToTableAnimation(x, y, card, index);
    }

    private appendToTableAnimation(x: string, y: string, card: CardProtocol, index: number) {

        card.setPosition(x, y)


        setTimeout(() => {
            card.img().style.rotate = `${getRandomNumber(-10, 10)}deg`;
            
            const left = `${Number(this.tableContent.style.left.split('px')[0]) + getRandomNumber(-20, 20)}px`;  
            const top = `${Number(this.tableContent.style.top.split('px')[0]) + getRandomNumber(-20, 20)}px`;  

            card.setPosition(left, top)
        }, 1);
    }
}