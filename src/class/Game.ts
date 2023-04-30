import Player from "./player";
import getRandomNumber from "./services/randomNumber";
import Card from "./Card";
import PlayerProtocol, { CardType } from "./types/PlayerProtocol";
import TableProtocol from "./types/TableProtocol";
import CardProtocol from "./types/CardProtocol";
import rules from './Rules';
import Rules from "./Rules";

export default class Game {
  private readonly cards: CardType[] = require("../data/json/data.json");
  private players: PlayerProtocol[] = [];
  private stack = document.getElementById("stack-cards") as HTMLDivElement;

  constructor(private readonly table: TableProtocol) {
    this.stack.style.top = `${(window.innerHeight * 50) / 100}px`;
    this.stack.style.left = `${(window.innerHeight * 20) / 100}px`;
  }

  addPlayer(player: PlayerProtocol) {
    this.players.push(player);
  }

  init() {
    this.generateDeck();
    this.players.map((player) => {
      player.play();
    });
    this.spyCards();
  }

  private spyCards() {
    this.players.map((player) => {
      player.deck.get.map((card, index) => {
        card.img().addEventListener("click", () => {
          this.addCardToTable(card, player, index);
        });
      });
    });
  }

  private addCardToTable(
    card: CardProtocol,
    player: PlayerProtocol,
    index: number
  ) {

    const rule = new Rules();

    rule.verify(card, this.table);

    if (!rule.cardIsValid) {
        return;
    }

    card.img(true).src = card.href;

    this.table.addCard(card, index);

    player.deck.deleteCard(index);

    card.cardAnimation.cardRepositioning(player.deck, index);
  }

  private generateDeck() {
    this.players.map((player) => {
      for (let i = 0; i <= 5; i++) {
        const randomNumber = getRandomNumber(this.cards.length - 1, 0);
        let card: CardProtocol;

        if (player.name.slice(0, 3) === "bot") {
          card = new Card(
            this.cards[randomNumber],
            i,
            "images/cartas-especiais/costa-uno.png"
          );
        } else {
          card = new Card(this.cards[randomNumber], i);
        }
        player.deck.add(card);
      }
      player.deck.setDeck();
    });
  }
}
