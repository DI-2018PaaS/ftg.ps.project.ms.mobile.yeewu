import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Produit } from '../../../../models/msmagasindomains/produit/produit.model';

/*
  Generated class for the ProduitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProduitProvider {
  private dbPath = 'lists-produit';
 
  produitRef: AngularFireList<Produit> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ProduitProvider Provider');
    this.produitRef = this.db.list(this.dbPath);
  }

 
  createProduit(p: Produit): void {
    this.produitRef.push(p);
  }
 
  updateProduit(key: string, value: any): void {
    this.produitRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteProduit(key: string): void {
    this.produitRef.remove(key).catch(error => this.handleError(error));
  }
 
  getProduitList(): AngularFireList<Produit> {
    return this.produitRef;
  }
 
  deleteAll(): void {
    this.produitRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }


}
