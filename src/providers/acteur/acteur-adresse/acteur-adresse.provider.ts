import { ActeurAdresse } from './../../../models/acteur/acteur-adresse/acteur-adresse.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ActeurAdresseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActeurAdresseProvider {
  private dbPath = 'firebaseDecl';
 
  refActeurAdresseRef: AngularFireList<ActeurAdresse> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ActeurAdresseProvider Provider');
    this.refActeurAdresseRef = this.db.list(this.dbPath);
  }

 
  createActeurAdresse(p: ActeurAdresse): void {
    this.refActeurAdresseRef.push(p);
  }
 
  updateActeurAdresse(key: string, value: any): void {
    this.refActeurAdresseRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteActeurAdresse(key: string): void {
    this.refActeurAdresseRef.remove(key).catch(error => this.handleError(error));
  }
 
  getActeurAdresseList(): AngularFireList<ActeurAdresse> {
    return this.refActeurAdresseRef;
  }
 
  deleteAll(): void {
    this.refActeurAdresseRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
