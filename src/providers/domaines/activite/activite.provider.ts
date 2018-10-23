import { Activite } from './../../../models/domaines/activite/activite.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ActiviteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActiviteProvider {
  private dbPath = 'domaines-db';
 
  refActiviteRef: AngularFireList<Activite> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ActiviteProvider Provider');
    this.refActiviteRef = this.db.list(this.dbPath);
  }

 
  createActivite(p: Activite): void {
    this.refActiviteRef.push(p);
  }
 
  updateActivite(key: string, value: any): void {
    this.refActiviteRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteActivite(key: string): void {
    this.refActiviteRef.remove(key).catch(error => this.handleError(error));
  }
 
  getActiviteList(): AngularFireList<Activite> {
    return this.refActiviteRef;
  }
 
  deleteAll(): void {
    this.refActiviteRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
