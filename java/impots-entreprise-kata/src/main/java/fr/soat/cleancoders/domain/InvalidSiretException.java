package fr.soat.cleancoders.domain;

public class InvalidSiretException extends RuntimeException {
    public InvalidSiretException(String message) {
        super(message);
    }
}
