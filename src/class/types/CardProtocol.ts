import CardAnimationProtocol from "./CardAnimationProtocol";

type CardProtocol = {
  img: HTMLImageElement;
  name: String;
  index: number;
  cardAnimation: CardAnimationProtocol;
  y: string;
  x: string;
  setPosition(x: string, y: string): void;
};

export default CardProtocol;
