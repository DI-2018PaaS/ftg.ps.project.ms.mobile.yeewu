export class Pret {
    key?: string;
    numPret: number;
    dateCreation: Date;
    dateMisAjour: Date;
    capitalRestant: number;
    dateDernierRemb: Date;
    idOwner: number;
}

export class TypePret{
    key?: string;
    idTypePret: number;
    libelle: string;
    description: string;
}