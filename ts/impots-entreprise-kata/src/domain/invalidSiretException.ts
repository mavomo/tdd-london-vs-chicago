export class InvalidSiretException implements Error {
    stack?: string;
    message: string;
    name: string;
    
    constructor(message: string, name: string) {
        this.message = message;
        this.name = name;
    }
}