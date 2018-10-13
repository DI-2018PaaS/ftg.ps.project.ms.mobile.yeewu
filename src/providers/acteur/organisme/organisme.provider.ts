import { Organisme } from './../../../models/acteur/organisme/organisme.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the OrganismeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrganismeProvider {
  private dbPath = 'firebaseDecl';
 
  refOrganismeRef: AngularFireList<Organisme> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello OrganismeProvider Provider');
    this.refOrganismeRef = this.db.list(this.dbPath);
  }

 
  createOrganisme(p: Organisme): void {
    this.refOrganismeRef.push(p);
  }
 
  updateOrganisme(key: string, value: any): void {
    this.refOrganismeRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteOrganisme(key: string): void {
    this.refOrganismeRef.remove(key).catch(error => this.handleError(error));
  }
 
  getOrganismeList(): AngularFireList<Organisme> {
    return this.refOrganismeRef;
  }
 
  deleteAll(): void {
    this.refOrganismeRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
