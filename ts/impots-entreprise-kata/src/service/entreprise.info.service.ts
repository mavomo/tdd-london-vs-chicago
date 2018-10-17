import {Injectable} from '@nestjs/common';
import {Entreprise} from "../domain/entreprise";

@Injectable()
export class EntrepriseInfoService {

    getEntrepise(siretNumber: string, denomination: string): Entreprise {
        return null;
    }

    getChiffreAffaire(entreprise: Entreprise) {
        return null;
    }
}
