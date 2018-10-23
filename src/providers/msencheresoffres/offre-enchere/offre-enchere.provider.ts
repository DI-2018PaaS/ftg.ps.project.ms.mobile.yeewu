import { OffreEnchere } from './../../../models/msencheresoffres/offre-enchere/offre-enchere';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the OffreEnchereProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OffreEnchereProvider {
  private dbPath = 'msencheresoffres-db';
 
  refOffreEnchereRef: AngularFireList<OffreEnchere> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello OffreEnchereProvider Provider');
    this.refOffreEnchereRef = this.db.list(this.dbPath);
  }

 
  createOffreEnchere(p: OffreEnchere): void {
    this.refOffreEnchereRef.push(p);
  }
 
  updateOffreEnchere(key: string, value: any): void {
    this.refOffreEnchereRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteOffreEnchere(key: string): void {
    this.refOffreEnchereRef.remove(key).catch(error => this.handleError(error));
  }
 
  getOffreEnchereList(): AngularFireList<OffreEnchere> {
    return this.refOffreEnchereRef;
  }
 
  deleteAll(): void {
    this.refOffreEnchereRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
