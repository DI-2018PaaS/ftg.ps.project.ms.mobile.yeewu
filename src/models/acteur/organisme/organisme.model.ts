entity Organisme {
    key?: string;
    organismeId: number;
    raisonSociale: string;
    typeOrganisme: string;
    domaineActivite: string;
    email: string;
    telephone: string;
    userCreated: number;
    userLastModif: number;
    dateCreated: const;
    dateLastModif: const;
}