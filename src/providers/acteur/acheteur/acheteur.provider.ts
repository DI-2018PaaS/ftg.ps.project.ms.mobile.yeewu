import { Acheteur } from './../../../models/acteur/acheteur/acheteur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the AcheteurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AcheteurProvider {
  private dbPath = 'acheteurs';
 
  refAcheteurRef: AngularFireList<Acheteur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello AcheteurProvider Provider');
    this.refAcheteurRef = this.db.list(this.dbPath);
  }

 
  createAcheteur(p: Acheteur): void {
    this.refAcheteurRef.push(p);
  }
 
  updateAcheteur(key: string, value: any): void {
    this.refAcheteurRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteAcheteur(key: string): void {
    this.refAcheteurRef.remove(key).catch(error => this.handleError(error));
  }
 
  getAcheteurList(): AngularFireList<Acheteur> {
    return this.refAcheteurRef;
  }
 
  deleteAll(): void {
    this.refAcheteurRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
