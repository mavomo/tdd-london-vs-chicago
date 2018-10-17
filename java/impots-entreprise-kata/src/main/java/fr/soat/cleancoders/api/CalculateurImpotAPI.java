package fr.soat.cleancoders.api;

import fr.soat.cleancoders.domain.Entreprise;
import fr.soat.cleancoders.services.EntrepriseInfoService;
import fr.soat.cleancoders.services.CalculateurImpotService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping("/")
@Api(value = "TaxCalculator", description = "Tax computation API")
public class CalculateurImpotAPI {

    private CalculateurImpotService calculatorService;
    private EntrepriseInfoService entrepriseInfoService;

    public CalculateurImpotAPI(CalculateurImpotService calculatorService, EntrepriseInfoService entrepriseInfoService) {
        this.calculatorService = calculatorService;
        this.entrepriseInfoService = entrepriseInfoService;
    }

    @ApiOperation(value = "Tax computation")
    @RequestMapping(value = "/taxes", method = RequestMethod.GET)
    public Double calculerImpot(@RequestParam(value = "siretNumber") String siretNumber,
                                @RequestParam(value = "denomination") String denomination) {

        Entreprise entreprise = entrepriseInfoService.getEntrepise(siretNumber, denomination);
        Double chiffreAffaire = entrepriseInfoService.getChiffreAffaire();

        return calculatorService.calculerImpot(entreprise, chiffreAffaire);
    }
}
