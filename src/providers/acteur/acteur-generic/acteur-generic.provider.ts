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
 
  refentityNameRef: AngularFireList<any> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase, entityType:string) 
  {
    console.log('Hello ActeurGenericProvider Provider');
    if(entityType=='Acheteur')
    {
      this.dbPath = 'acheteurs';
    }
    if(entityType=='Fournisseur')
    {
      this.dbPath = 'fournisseurs';
    }
    if(entityType=='Animateur')
    {
      this.dbPath = 'animateurs';
    }
    if(entityType=='Banque')
    {
      this.dbPath = 'banques';
    }
    this.refentityNameRef = this.db.list(this.dbPath);
  }

  createEntityName(p: any, entityType:string): void {

    if(entityType=='Acheteur')
    {
      this.dataAcheteur = p;
      this.refentityNameRef.push(this.dataAcheteur);
    }
    if(entityType=='Fournisseur')
    {
      this.dataFournisseur = p;
      this.refentityNameRef.push(this.dataFournisseur);
    }
    if(entityType=='Animateur')
    {
      this.dataAnimateur = p;
      this.refentityNameRef.push(this.dataAnimateur);
    }
    if(entityType=='Banque')
    {
      this.dataBanque = p;
      this.refentityNameRef.push(this.dataBanque);
    }
  }
 
  updateEntityName(key: string, value: any, entityType:string): void {
    if(entityType=='Acheteur')
    {
      this.dataAcheteur = value;
      this.refentityNameRef.push(this.dataAcheteur);
    }
    if(entityType=='Fournisseur')
    {
      this.dataFournisseur = value;
      this.refentityNameRef.push(this.dataFournisseur);
    }
    if(entityType=='Animateur')
    {
      this.dataAnimateur = value;
      this.refentityNameRef.push(this.dataAnimateur);
    }
    if(entityType=='Banque')
    {
      this.dataBanque = value;
      this.refentityNameRef.push(this.dataBanque);
    }
    this.refentityNameRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteEntityName(key: string): void {
    this.refentityNameRef.remove(key).catch(error => this.handleError(error));
  }
 
  getEntityNameList(): AngularFireList<any> {
    return this.refentityNameRef;
  }
 
  deleteAll(): void {
    this.refentityNameRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
