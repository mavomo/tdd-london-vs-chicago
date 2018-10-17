import {Entreprise} from "./entreprise";
import {TypeEntreprise} from "./entreprise.type";

export class AutoEntreprise extends Entreprise {

    constructor(siret: string, denomination: string) {
        super(siret, denomination, TypeEntreprise.AUTOENTREPRISE);
    }

    tauxImposition(): number {
        return 0.25;
    }

}