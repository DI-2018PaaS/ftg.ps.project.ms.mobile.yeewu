import { BonCommande } from './../../../models/msmagasindomains/bon-commande/bon-commande.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the BonCommandeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BonCommandeProvider {
  private dbPath = 'list-bonCommande';
 
  BonCommandeRef: AngularFireList<BonCommande> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BonCommandeProvider Provider');
    this.BonCommandeRef = this.db.list(this.dbPath);
  }

 
  createBonCommande(p: BonCommande): void {
    this.BonCommandeRef.push(p);
  }
 
  updateBonCommande(key: string, value: any): void {
    this.BonCommandeRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBonCommande(key: string): void {
    this.BonCommandeRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBonCommandeList(): AngularFireList<BonCommande> {
    return this.BonCommandeRef;
  }

  deleteAll(): void {
    this.BonCommandeRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  } 
}
