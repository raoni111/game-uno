import CardProtocol from "./types/CardProtocol";
import RulesProtocol from "./types/RuleProtocol";
import TableProtocol from "./types/TableProtocol";

export default class Rules implements RulesProtocol {
    private card: CardProtocol;
    private table: TableProtocol;

    public cardIsValid: boolean = false;

    verify(card: CardProtocol, table: TableProtocol): boolean {
        this.card = card;
        this.table = table

        console.log(card, table.cardActive)

        if (!table.cardActive) {
            this.cardIsValid = true;
            return true;
        }

        this.verifyColor();
        this.verifyNumber();

        return this.cardIsValid;
    }

    private verifyColor() {
        if (this.card.color === this.table.cardActive.color) {
            this.cardIsValid = true;
        }
    }
    private verifyNumber() {
        if (this.card.name === this.table.cardActive.name) {
            this.cardIsValid = true;
        }
    }
}