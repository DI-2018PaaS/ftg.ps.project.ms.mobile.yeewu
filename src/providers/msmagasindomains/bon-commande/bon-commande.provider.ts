import { BonCommande } from './../../../models/msmagasindomains/bon-commande/bon-commande.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the BonCommandeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BonCommandeProvider {
  private dbPath = 'firebaseDecl';
 
  refBonCommandeRef: AngularFireList<BonCommande> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BonCommandeProvider Provider');
    this.refBonCommandeRef = this.db.list(this.dbPath);
  }

 
  createBonCommande(p: BonCommande): void {
    this.refBonCommandeRef.push(p);
  }
 
  updateBonCommande(key: string, value: any): void {
    this.refBonCommandeRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBonCommande(key: string): void {
    this.refBonCommandeRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBonCommandeList(): AngularFireList<BonCommande> {
    return this.refBonCommandeRef;
  }
 
  deleteAll(): void {
    this.refBonCommandeRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
