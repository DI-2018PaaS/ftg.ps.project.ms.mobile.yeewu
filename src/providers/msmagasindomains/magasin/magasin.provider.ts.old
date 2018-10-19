import { Magasin } from './../../../models/msmagasindomains/magasin/magasin.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the MagasinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MagasinProvider {
  private dbPath = 'firebaseDecl';
 
  refMagasinRef: AngularFireList<Magasin> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello MagasinProvider Provider');
    this.refMagasinRef = this.db.list(this.dbPath);
  }

 
  createMagasin(p: Magasin): void {
    this.refMagasinRef.push(p);
  }
 
  updateMagasin(key: string, value: any): void {
    this.refMagasinRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteMagasin(key: string): void {
    this.refMagasinRef.remove(key).catch(error => this.handleError(error));
  }
 
  getMagasinList(): AngularFireList<Magasin> {
    return this.refMagasinRef;
  }
 
  deleteAll(): void {
    this.refMagasinRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
