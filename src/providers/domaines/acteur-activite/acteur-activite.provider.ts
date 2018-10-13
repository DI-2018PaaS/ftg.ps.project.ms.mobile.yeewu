import { ActeurActivite } from './../../../models/domaines/acteur-activite/acteur-activite.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ActeurActiviteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActeurActiviteProvider {
  private dbPath = 'firebaseDecl';
 
  refActeurActiviteRef: AngularFireList<ActeurActivite> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ActeurActiviteProvider Provider');
    this.refActeurActiviteRef = this.db.list(this.dbPath);
  }

 
  createActeurActivite(p: ActeurActivite): void {
    this.refActeurActiviteRef.push(p);
  }
 
  updateActeurActivite(key: string, value: any): void {
    this.refActeurActiviteRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteActeurActivite(key: string): void {
    this.refActeurActiviteRef.remove(key).catch(error => this.handleError(error));
  }
 
  getActeurActiviteList(): AngularFireList<ActeurActivite> {
    return this.refActeurActiviteRef;
  }
 
  deleteAll(): void {
    this.refActeurActiviteRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
