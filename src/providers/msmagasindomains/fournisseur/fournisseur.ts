import { Fournisseur } from './../../../models/acteur/fournisseur/fournisseur.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
/*
  Generated class for the FournisseurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FournisseurProvider {
  private dbPath = 'list-Fournisseur';
 
  fournisseurRef: AngularFireList<Fournisseur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello FournisseurProvider Provider');
    this.fournisseurRef = this.db.list(this.dbPath);
  }

 
  createFournisseur(p: Fournisseur): void {
    this.fournisseurRef.push(p);
  }
 
  updateFournisseur(key: string, value: any): void {
    this.fournisseurRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteFournisseur(key: string): void {
    this.fournisseurRef.remove(key).catch(error => this.handleError(error));
  }
 
  getFournisseurList(): AngularFireList<Fournisseur> {
    return this.fournisseurRef;
  }
 
  deleteAll(): void {
    this.fournisseurRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}
