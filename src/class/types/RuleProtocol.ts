import CardProtocol from './CardProtocol'
import TableProtocol from './TableProtocol'


export default interface RulesProtocol {
    cardIsValid: boolean;
    verify(card: CardProtocol, table: TableProtocol): Boolean;
}