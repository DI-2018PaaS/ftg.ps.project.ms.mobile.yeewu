import { Fournisseur } from './../../../models/acteur/fournisseur/fournisseur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the FournisseurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FournisseurProvider {
  private dbPath = 'firebaseDecl';
 
  refFournisseurRef: AngularFireList<Fournisseur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello FournisseurProvider Provider');
    this.refFournisseurRef = this.db.list(this.dbPath);
  }

 
  createFournisseur(p: Fournisseur): void {
    this.refFournisseurRef.push(p);
  }
 
  updateFournisseur(key: string, value: any): void {
    this.refFournisseurRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteFournisseur(key: string): void {
    this.refFournisseurRef.remove(key).catch(error => this.handleError(error));
  }
 
  getFournisseurList(): AngularFireList<Fournisseur> {
    return this.refFournisseurRef;
  }
 
  deleteAll(): void {
    this.refFournisseurRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
