import {Controller, Get} from '@nestjs/common';
import {CalculateurImpotService} from '../service/calculateur-impot.service';
import {Query} from "@nestjs/common/utils/decorators/route-params.decorator";
import {ApiImplicitQuery, ApiUseTags} from "@nestjs/swagger";
import {EntrepriseInfoService} from "../service/entreprise.info.service";
import {Entreprise} from "../domain/entreprise";

@Controller()
@ApiUseTags('tax-calculator-api')
export class CalculateurImpotApi {
    constructor(
        private readonly calculateurImpotService: CalculateurImpotService,
        private readonly entrepriseInfoService: EntrepriseInfoService) {
    }

    @Get('/calculImpot')
    @ApiImplicitQuery({name: 'siret', description: 'Numero de siret', required: true})
    @ApiImplicitQuery({name: 'denomination', description: 'Dénomination de l\'entrepise', required: true})
    calculerImpot(@Query('siret') siret: string, @Query('denomination') denomination: string) {
        const entreprise: Entreprise = this.entrepriseInfoService.getEntrepise(siret, denomination);
        const chiffreAffaire: number = this.entrepriseInfoService.getChiffreAffaire(entreprise);

        return this.calculateurImpotService.calculerImpot(entreprise, chiffreAffaire);
    }
}
