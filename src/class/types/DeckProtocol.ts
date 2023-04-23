import CardProtocol from "./CardProtocol"

type DeckProtocol = {
    get: CardProtocol[];
    add: (card: CardProtocol) => CardProtocol[];
    setDeck: () => void;
    deleteCard(index: number): void
}

export default DeckProtocol