import { Produit } from './../../../models/msmagasindomains/produit/produit.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ProduitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProduitProvider {
  private dbPath = 'firebaseDecl';
 
  refProduitRef: AngularFireList<Produit> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ProduitProvider Provider');
    this.refProduitRef = this.db.list(this.dbPath);
  }

 
  createProduit(p: Produit): void {
    this.refProduitRef.push(p);
  }
 
  updateProduit(key: string, value: any): void {
    this.refProduitRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteProduit(key: string): void {
    this.refProduitRef.remove(key).catch(error => this.handleError(error));
  }
 
  getProduitList(): AngularFireList<Produit> {
    return this.refProduitRef;
  }
 
  deleteAll(): void {
    this.refProduitRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
