export class Adresse {
    key?: string;
    adresseId: number;
    rue: string;
    codePostal: string;
    ville: string;
    pays: string;
    userCreated: number;
    userLastModif: number;
    dateCreated: string;
    dateLastModif: string;
}

export class AdresseActeur {
    key?: string;
    adresseID: number;
    acteurID: number;   
}