import CardAnimationProtocol from "./CardAnimationProtocol";

type CardProtocol = {
  img(skip?: boolean): HTMLImageElement;
  name: string;
  color: string
  index: number;
  href: string;
  cardAnimation: CardAnimationProtocol;
  y: string;
  x: string;
  setPosition(x: string, y: string): void;
};

export default CardProtocol;
