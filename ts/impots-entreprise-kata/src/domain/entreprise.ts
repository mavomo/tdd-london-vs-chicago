import {TypeEntreprise} from "./entreprise.type";
import {Siret} from "./siret";

export abstract class Entreprise {
    private _denomination: string;
    private _type: TypeEntreprise;
    private _siret: Siret;

    constructor(siret: string, denomination: string, type: TypeEntreprise) {
        this._denomination = denomination;
        this._type = type;
        this._siret = new Siret(siret);
    }

    abstract tauxImposition(): number ;


    public get denomination(): string {
        return this._denomination;
    }

    public get type(): TypeEntreprise {
        return this._type;
    }

    public get siret(): Siret {
        return this._siret;
    }
}