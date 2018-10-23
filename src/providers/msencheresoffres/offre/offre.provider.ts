import { Offre } from './../../../models/msencheresoffres/offre/offre';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the OffreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OffreProvider {
  private dbPath = 'msencheresoffres-db';
 
  refOffreRef: AngularFireList<Offre> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello OffreProvider Provider');
    this.refOffreRef = this.db.list(this.dbPath);
  }

 
  createOffre(p: Offre): void {
    this.refOffreRef.push(p);
  }
 
  updateOffre(key: string, value: any): void {
    this.refOffreRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteOffre(key: string): void {
    this.refOffreRef.remove(key).catch(error => this.handleError(error));
  }
 
  getOffreList(): AngularFireList<Offre> {
    return this.refOffreRef;
  }
 
  deleteAll(): void {
    this.refOffreRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
