import DeckProtocol from "./DeckProtocol";

export type CardType = {
    name: string
    image: string
};

type PlayerProtocol = {
    deck: DeckProtocol;
    play(): void;
}

export default PlayerProtocol;