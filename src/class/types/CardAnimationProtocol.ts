import CardProtocol from "./CardProtocol";
import DeckProtocol from "./DeckProtocol";

type CardAnimationProtocol = {
    cardRepositioning(stack: DeckProtocol, index: number): void
}

export default CardAnimationProtocol;