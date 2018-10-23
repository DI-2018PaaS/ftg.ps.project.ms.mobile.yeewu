import { Acheteur } from './../../../models/acteur/acheteur/acheteur.model';
import { Fournisseur } from './../../../models/acteur/fournisseur/fournisseur.model';
import { Animateur } from './../../../models/acteur/animateur/animateur.model';
import { Banque } from './../../../models/acteur/banque/banque.model';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ActeurGenericProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActeurGenericProvider {
  private dbPath = 'null';

  private dataAcheteur: Acheteur = null;
  private dataFournisseur: Fournisseur = null;
  private dataAnimateur: Animateur = null;
  private dataBanque: Banque = null;
 
  refActeurGenericRef: AngularFireList<any> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase, entityType:string) 
  {
    console.log('Hello ActeurGenericProvider Provider');
    if(entityType=='Acheteur')
    {
      this.dbPath = 'acteurs-db';
    }
    if(entityType=='Fournisseur')
    {
      this.dbPath = 'acteurs-db';
    }
    if(entityType=='Animateur')
    {
      this.dbPath = 'acteurs-db';
    }
    if(entityType=='Banque')
    {
      this.dbPath = 'banques-db';
    }
    this.refActeurGenericRef = this.db.list(this.dbPath);
  }

  createActeurGeneric(p: any, entityType:any): void {

    if(entityType=='Acheteur')
    {
      this.dataAcheteur = p;
      this.refActeurGenericRef.push(this.dataAcheteur);
    }
    if(entityType=='Fournisseur')
    {
      this.dataFournisseur = p;
      this.refActeurGenericRef.push(this.dataFournisseur);
    }
    if(entityType=='Animateur')
    {
      this.dataAnimateur = p;
      this.refActeurGenericRef.push(this.dataAnimateur);
    }
    if(entityType=='Banque')
    {
      this.dataBanque = p;
      this.refActeurGenericRef.push(this.dataBanque);
    }
  }
 
  updateActeurGeneric(key: string, value: any, entityType:any): void {
    if(entityType=='Acheteur')
    {
      this.dataAcheteur = value;
      this.refActeurGenericRef.push(this.dataAcheteur);
    }
    if(entityType=='Fournisseur')
    {
      this.dataFournisseur = value;
      this.refActeurGenericRef.push(this.dataFournisseur);
    }
    if(entityType=='Animateur')
    {
      this.dataAnimateur = value;
      this.refActeurGenericRef.push(this.dataAnimateur);
    }
    if(entityType=='Banque')
    {
      this.dataBanque = value;
      this.refActeurGenericRef.push(this.dataBanque);
    }
    this.refActeurGenericRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteActeurGeneric(key: string): void {
    this.refActeurGenericRef.remove(key).catch(error => this.handleError(error));
  }
 
  getActeurGenericList(): AngularFireList<any> {
    return this.refActeurGenericRef;
  }
 
  deleteAll(): void {
    this.refActeurGenericRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
