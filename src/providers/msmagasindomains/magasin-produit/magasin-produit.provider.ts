import { MagasinProduit } from './../../../models/msmagasindomains/magasin-produit/magasin-produit.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the MagasinProduitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MagasinProduitProvider {
  private dbPath = 'firebaseDecl';
 
  refMagasinProduitRef: AngularFireList<MagasinProduit> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello MagasinProduitProvider Provider');
    this.refMagasinProduitRef = this.db.list(this.dbPath);
  }

 
  createMagasinProduit(p: MagasinProduit): void {
    this.refMagasinProduitRef.push(p);
  }
 
  updateMagasinProduit(key: string, value: any): void {
    this.refMagasinProduitRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteMagasinProduit(key: string): void {
    this.refMagasinProduitRef.remove(key).catch(error => this.handleError(error));
  }
 
  getMagasinProduitList(): AngularFireList<MagasinProduit> {
    return this.refMagasinProduitRef;
  }
 
  deleteAll(): void {
    this.refMagasinProduitRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
