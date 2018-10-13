import { DirectPaiement } from './../../../models/paiement/direct-paiement/direct-paiement.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the DirectPaiementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DirectPaiementProvider {
  private dbPath = 'firebaseDecl';
 
  refDirectPaiementRef: AngularFireList<DirectPaiement> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello DirectPaiementProvider Provider');
    this.refDirectPaiementRef = this.db.list(this.dbPath);
  }

 
  createDirectPaiement(p: DirectPaiement): void {
    this.refDirectPaiementRef.push(p);
  }
 
  updateDirectPaiement(key: string, value: any): void {
    this.refDirectPaiementRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteDirectPaiement(key: string): void {
    this.refDirectPaiementRef.remove(key).catch(error => this.handleError(error));
  }
 
  getDirectPaiementList(): AngularFireList<DirectPaiement> {
    return this.refDirectPaiementRef;
  }
 
  deleteAll(): void {
    this.refDirectPaiementRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
