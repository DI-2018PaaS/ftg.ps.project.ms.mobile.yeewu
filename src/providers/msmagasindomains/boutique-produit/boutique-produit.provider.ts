import { BoutiqueProduit } from './../../../models/msmagasindomains/boutique-produit/boutique-produit.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the BoutiqueProduitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BoutiqueProduitProvider {
  private dbPath = 'firebaseDecl';
 
  refBoutiqueProduitRef: AngularFireList<BoutiqueProduit> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BoutiqueProduitProvider Provider');
    this.refBoutiqueProduitRef = this.db.list(this.dbPath);
  }

 
  createBoutiqueProduit(p: BoutiqueProduit): void {
    this.refBoutiqueProduitRef.push(p);
  }
 
  updateBoutiqueProduit(key: string, value: any): void {
    this.refBoutiqueProduitRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBoutiqueProduit(key: string): void {
    this.refBoutiqueProduitRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBoutiqueProduitList(): AngularFireList<BoutiqueProduit> {
    return this.refBoutiqueProduitRef;
  }
 
  deleteAll(): void {
    this.refBoutiqueProduitRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
