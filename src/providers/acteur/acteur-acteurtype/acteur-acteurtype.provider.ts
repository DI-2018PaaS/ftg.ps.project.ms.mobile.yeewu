import { ActeurTypeActeur } from './../../../models/acteur/acteur-acteurtype/acteur-acteurtype.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ActeurTypeActeurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActeurTypeActeurProvider {
  private dbPath = 'firebaseDecl';
 
  refActeurTypeActeurRef: AngularFireList<ActeurTypeActeur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ActeurTypeActeurProvider Provider');
    this.refActeurTypeActeurRef = this.db.list(this.dbPath);
  }

 
  createActeurTypeActeur(p: ActeurTypeActeur): void {
    this.refActeurTypeActeurRef.push(p);
  }
 
  updateActeurTypeActeur(key: string, value: any): void {
    this.refActeurTypeActeurRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteActeurTypeActeur(key: string): void {
    this.refActeurTypeActeurRef.remove(key).catch(error => this.handleError(error));
  }
 
  getActeurTypeActeurList(): AngularFireList<ActeurTypeActeur> {
    return this.refActeurTypeActeurRef;
  }
 
  deleteAll(): void {
    this.refActeurTypeActeurRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
