export class Adresse {
    key?: string;
    adresseId: number;
    rue: string;
    codePostal: string;
    ville: string;
    pays: string;
    userCreated: number;
    userLastModif: number;
    dateCreated: const;
    dateLastModif: number;
}

export class AdresseActeur {
    key?: string;
    adresseID: number;
    acteurID: number;   
}