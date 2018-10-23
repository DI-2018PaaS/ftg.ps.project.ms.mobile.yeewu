import { ReglementCommande } from './../../../models/paiement/reglement-commande/reglement-commande.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ReglementCommandeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReglementCommandeProvider {
  private dbPath = 'regelements-db';
 
  refReglementCommandeRef: AngularFireList<ReglementCommande> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ReglementCommandeProvider Provider');
    this.refReglementCommandeRef = this.db.list(this.dbPath);
  }

 
  createReglementCommande(p: ReglementCommande): void {
    this.refReglementCommandeRef.push(p);
  }
 
  updateReglementCommande(key: string, value: any): void {
    this.refReglementCommandeRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteReglementCommande(key: string): void {
    this.refReglementCommandeRef.remove(key).catch(error => this.handleError(error));
  }
 
  getReglementCommandeList(): AngularFireList<ReglementCommande> {
    return this.refReglementCommandeRef;
  }
 
  deleteAll(): void {
    this.refReglementCommandeRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
