import { Domaine } from './../../../models/domaines/domaine/domaine.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the DomaineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DomaineProvider {
  private dbPath = 'firebaseDecl';
 
  refDomaineRef: AngularFireList<Domaine> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello DomaineProvider Provider');
    this.refDomaineRef = this.db.list(this.dbPath);
  }

 
  createDomaine(p: Domaine): void {
    this.refDomaineRef.push(p);
  }
 
  updateDomaine(key: string, value: any): void {
    this.refDomaineRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteDomaine(key: string): void {
    this.refDomaineRef.remove(key).catch(error => this.handleError(error));
  }
 
  getDomaineList(): AngularFireList<Domaine> {
    return this.refDomaineRef;
  }
 
  deleteAll(): void {
    this.refDomaineRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
