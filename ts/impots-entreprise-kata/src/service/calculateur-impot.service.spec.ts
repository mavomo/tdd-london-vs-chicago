import {CalculateurImpotService} from "./calculateur-impot.service";
import {Test, TestingModule} from "@nestjs/testing";
import {Entreprise} from "../domain/entreprise";
import {AutoEntreprise} from "../domain/auto.entreprise";

describe('CalculateurImpotService', () => {
    let calculateurImpotService: CalculateurImpotService;
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            providers: [CalculateurImpotService],
        }).compile();

        calculateurImpotService = app.get<CalculateurImpotService>(CalculateurImpotService);
    });

    it('should create', () => {
        expect(calculateurImpotService).toBeDefined();
    });

    describe('Montant de l\'impot suivant le type d\'entreprise', () => {

        it('should return the amount of taxes an auto-entreprise has to pay', () => {
            const autoEntreprise: Entreprise = new AutoEntreprise('AUTO1234567890', 'AutoEntreprise');
            const impotAPayer = calculateurImpotService.calculerImpot(autoEntreprise, 100000);

            expect(impotAPayer).toBe(25000)

        });


    });


});