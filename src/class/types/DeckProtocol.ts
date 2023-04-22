import CardProtocol from "./CardProtocol"

type DeckProtocol = {
    get: CardProtocol[];
    add: (card: CardProtocol) => CardProtocol[];
    setDeck: () => void;
}

export default DeckProtocol