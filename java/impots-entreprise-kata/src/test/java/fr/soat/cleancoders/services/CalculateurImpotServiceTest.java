package fr.soat.cleancoders.services;

import fr.soat.cleancoders.domain.AutoEntreprise;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

public class CalculateurImpotServiceTest {
    private AutoEntreprise autoEntreprise;
    private CalculateurImpotService calculateurImpot;

    @Before
    public void init() {
        this.autoEntreprise = new AutoEntreprise("AUTO1234567890", "AutoEntreprise");
        this.calculateurImpot = new CalculateurImpotService();
    }

    @Test
    public void should_give_the_right_tax_amount_for_an_auto_entreprise() {
        Assertions.assertThat(calculateurImpot.calculerImpot(autoEntreprise, 100000d)).isEqualTo(25000);

        Assertions.assertThat(calculateurImpot.calculerImpot(autoEntreprise, 123456d)).isEqualTo(30864);

    }

}