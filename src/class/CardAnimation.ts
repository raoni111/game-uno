import CardProtocol from './types/CardProtocol'
import CardAnimationProtocol from './types/CardAnimationProtocol'
import DeckProtocol from './types/DeckProtocol';

export default class CardAnimation implements CardAnimationProtocol {
    constructor(private readonly card: CardProtocol) {}

    cardRepositioning(stack: DeckProtocol, index: number) {
        stack.get.map((InCard, InIndex) => {
            if (InIndex > index) {
                const x = `${Number(InCard.x.split('px')[0]) - 120}px`;                        
                const y = InCard.y;

                InCard.setPosition(x, y)
            }
        })
    }
}