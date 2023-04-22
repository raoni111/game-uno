import CardProtocol from "./CardProtocol";
import { CardType } from "./PlayerProtocol";

type TableProtocol = {
    addCard(card: CardProtocol): void;
}

export default TableProtocol;