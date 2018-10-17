import {Module} from '@nestjs/common';
import {CalculateurImpotService} from './service/calculateur-impot.service';
import {CalculateurImpotApi} from "./api/calculateur.impot.api";
import {EntrepriseInfoService} from "./service/entreprise.info.service";

@Module({
    imports: [],
    controllers: [CalculateurImpotApi],
    providers: [CalculateurImpotService, EntrepriseInfoService],
})
export class AppModule {
}
