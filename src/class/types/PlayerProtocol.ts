import DeckProtocol from "./DeckProtocol";

export type NamePlayerType = 'Player1' | 'Player2' | 'Player3' | 'Player4' | 'bot1' | 'bot2' | 'bot3' | 'bot4'; 

export type CardType = {
    name: string
    image: string
    color: string
};

type PlayerProtocol = {
    name: string;
    deck: DeckProtocol;
    play(): void;
}

export default PlayerProtocol;