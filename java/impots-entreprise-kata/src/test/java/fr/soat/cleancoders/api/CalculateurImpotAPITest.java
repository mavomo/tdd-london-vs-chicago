package fr.soat.cleancoders.api;

import fr.soat.cleancoders.services.CalculateurImpotService;
import fr.soat.cleancoders.services.EntrepriseInfoService;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class CalculateurImpotAPITest {
    final double MOCKED_VALUE = -1D;

    @Mock
    private CalculateurImpotService calculateurImpotService;

    @Mock
    private EntrepriseInfoService entrepriseInfoService;

    private CalculateurImpotAPI calculateurImpotAPI;

    @Before
    public void setUp() {
        calculateurImpotAPI = new CalculateurImpotAPI(calculateurImpotService, entrepriseInfoService);
    }

    @Test
    public void should_return_the_tax_amount_to_be_paid_by_the_auto_entreprise() {
        Mockito.when(calculateurImpotAPI.calculerImpot("123", "...")).thenCallRealMethod();

        final Double impot = calculateurImpotAPI.calculerImpot("123", "...");

        Assertions.assertThat(impot).isEqualTo(null);

    }
}