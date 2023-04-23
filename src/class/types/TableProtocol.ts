import CardProtocol from "./CardProtocol";
import { CardType } from "./PlayerProtocol";

type TableProtocol = {
    tableElement: HTMLDivElement;
    addCard(card: CardProtocol, index: number): void;
}

export default TableProtocol;