import CardAnimationProtocol from "./CardAnimationProtocol";

type CardProtocol = {
    img: HTMLImageElement;
    name: String;
    index: number;
    cardAnimation: CardAnimationProtocol;
}

export default CardProtocol;