import Player from './class/player';
import Game from './class/Game'
import Table from './class/Table'
import './style/style.scss';

const deckElement = document.getElementById('deck-element') as HTMLDivElement;
const deckBotElement = document.getElementById('deck-bot-element') as HTMLDivElement;
const tableElement = document.getElementById('table-content') as HTMLDivElement;

const audioElement = document.getElementById('card-sound-element') as HTMLAudioElement;

const playerOne = new Player(deckElement);
// const playerTwo = new Player(deckBotElement);

const table = new Table(tableElement, audioElement);

const game = new Game(table);

game.addPlayer(playerOne);
// game.addPlayer(playerTwo);

game.init();
