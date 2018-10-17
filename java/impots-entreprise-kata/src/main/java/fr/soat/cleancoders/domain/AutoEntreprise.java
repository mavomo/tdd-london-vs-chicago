package fr.soat.cleancoders.domain;

public class AutoEntreprise extends Entreprise {

    public AutoEntreprise(String siret, String denomination) {
        super(siret, denomination, TypeEntreprise.AUTOENTREPRISE);
    }

    @Override
    public Double tauxImposition() {

        throw new UnsupportedOperationException("NOT YET IMPLEMENTED");

    }

}
