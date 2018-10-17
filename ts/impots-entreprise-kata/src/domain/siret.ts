import {InvalidSiretException} from "./invalidSiretException";

export class Siret {
    value: string;

    constructor(value: string) {
        this.validerSiret(value);
        this.value = value;
    }

    validerSiret(siretNumber): void {
        if (siretNumber !== '' && siretNumber.length !== 14) {
            throw new InvalidSiretException('[SIRET]', `Le siret ** ${siretNumber}** n'est pas valide`);
        }
    }
}