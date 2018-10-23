import { Adresse } from './../../../models/acteur/adresse/adresse.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the AdresseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdresseProvider {
  private dbPath = 'acteurs-db';
 
  refAdresseRef: AngularFireList<Adresse> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello AdresseProvider Provider');
    this.refAdresseRef = this.db.list(this.dbPath);
  }

 
  createAdresse(p: Adresse): void {
    this.refAdresseRef.push(p);
  }
 
  updateAdresse(key: string, value: any): void {
    this.refAdresseRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteAdresse(key: string): void {
    this.refAdresseRef.remove(key).catch(error => this.handleError(error));
  }
 
  getAdresseList(): AngularFireList<Adresse> {
    return this.refAdresseRef;
  }
 
  deleteAll(): void {
    this.refAdresseRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
