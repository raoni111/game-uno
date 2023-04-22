import Player from './player';
import getRandomNumber from './services/randomNumber';
import Card from './Card';
import { CardType } from './types/PlayerProtocol';
import TableProtocol from './types/TableProtocol';

export default class Game {
    private readonly cards: CardType[] = require('../data/json/data.json')
    private players: Player[] = [];

    constructor(private readonly table: TableProtocol) {}

    addPlayer(player: Player) {
        this.players.push(player);
    }

    init() {
        this.generateDeck();
        this.players.map((player => {
            player.play()
        }));
        this.spyCards();
    }

    private spyCards() {
        this.players.map(((player) => {
            player.deck.get.map(card => {
                card.img.addEventListener('click', () => {
                    this.table.addCard(card);
                });
            })
        }))
    }

    private generateDeck() {
        this.players.map((player) => {
            for (let i = 0; i <= 5; i++) {
            const randomNumber = getRandomNumber(this.cards.length - 1, 0);
    
            const card = new Card(this.cards[randomNumber], i)
            
            player.deck.add(card);
            }
            player.deck.setDeck();
        });

    }
}