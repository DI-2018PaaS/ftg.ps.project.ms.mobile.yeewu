export class Pret {
    key?: string;
    numPret: number;
    dateCreation: Date;
    dateMisAjour: Date;
    capitalRestant: BigDecimal;
    dateDernierRemb: Date;
    idOwner: Long;
}

export class TypePret{
    key?: string;
    idTypePret: number;
    libelle: string;
    description: string;
}