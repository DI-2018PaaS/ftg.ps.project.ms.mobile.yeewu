import { ActeurType } from './../../../models/acteur/acteur-type/acteur-type.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ActeurTypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActeurTypeProvider {
  private dbPath = 'acteurs-db';
 
  refActeurTypeRef: AngularFireList<ActeurType> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ActeurTypeProvider Provider');
    this.refActeurTypeRef = this.db.list(this.dbPath);
  }

 
  createActeurType(p: ActeurType): void {
    this.refActeurTypeRef.push(p);
  }
 
  updateActeurType(key: string, value: any): void {
    this.refActeurTypeRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteActeurType(key: string): void {
    this.refActeurTypeRef.remove(key).catch(error => this.handleError(error));
  }
 
  getActeurTypeList(): AngularFireList<ActeurType> {
    return this.refActeurTypeRef;
  }
 
  deleteAll(): void {
    this.refActeurTypeRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
