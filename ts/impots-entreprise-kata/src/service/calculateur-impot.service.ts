import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {Entreprise} from "../domain/entreprise";

@Injectable()
export class CalculateurImpotService {

    calculerImpot(entreprise: Entreprise, chiffreAffaire: number): number {
        throw new InternalServerErrorException('Not yet implemented !');
    }
}
