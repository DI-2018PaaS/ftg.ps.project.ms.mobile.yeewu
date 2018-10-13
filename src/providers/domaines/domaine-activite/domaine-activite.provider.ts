import { DomaineActivite } from './../../../models/domaines/domaine-activite/domaine-activite';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the DomaineActiviteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DomaineActiviteProvider {
  private dbPath = 'firebaseDecl';
 
  refDomaineActiviteRef: AngularFireList<DomaineActivite> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello DomaineActiviteProvider Provider');
    this.refDomaineActiviteRef = this.db.list(this.dbPath);
  }

 
  createDomaineActivite(p: DomaineActivite): void {
    this.refDomaineActiviteRef.push(p);
  }
 
  updateDomaineActivite(key: string, value: any): void {
    this.refDomaineActiviteRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteDomaineActivite(key: string): void {
    this.refDomaineActiviteRef.remove(key).catch(error => this.handleError(error));
  }
 
  getDomaineActiviteList(): AngularFireList<DomaineActivite> {
    return this.refDomaineActiviteRef;
  }
 
  deleteAll(): void {
    this.refDomaineActiviteRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
