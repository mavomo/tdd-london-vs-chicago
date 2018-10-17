import {Test, TestingModule} from '@nestjs/testing';
import {CalculateurImpotService} from '../service/calculateur-impot.service';
import {CalculateurImpotApi} from "./calculateur.impot.api";
import {EntrepriseInfoService} from "../service/entreprise.info.service";

describe('CalculateurImpotApi', () => {
    let app: TestingModule;
    let appController: CalculateurImpotApi;

    const calculatorImpotServiceMock: CalculateurImpotService = {calculerImpot: () => null};
    const entrepiseInfoMock: EntrepriseInfoService = {getEntrepise: () => null, getChiffreAffaire: () => null};

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [CalculateurImpotApi],
            providers: [
                {
                    provide: CalculateurImpotService, useValue: calculatorImpotServiceMock
                },
                {
                    provide: EntrepriseInfoService, useValue: entrepiseInfoMock
                },
            ],
        }).compile();

        appController = app.get<CalculateurImpotApi>(CalculateurImpotApi);
    });

    describe('calculImpot', () => {
        const MOCKED_VALUE = -1;

        it('should return the amount of taxes to be paid given an auto-entreprise', () => {
            jest.spyOn(calculatorImpotServiceMock, 'calculerImpot').mockImplementation(() => {
                return MOCKED_VALUE
            });

            let amount = appController.calculerImpot('test', '...');
            expect(amount).toBe(MOCKED_VALUE);
        });
    });
});
