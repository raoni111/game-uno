import CardProtocol from './types/CardProtocol'
import CardAnimationProtocol from './types/CardAnimationProtocol'

export default class CardAnimation implements CardAnimationProtocol {
    constructor(private readonly card: CardProtocol) {}

    stackAnimation(deckElement: HTMLDivElement) {
    }
}