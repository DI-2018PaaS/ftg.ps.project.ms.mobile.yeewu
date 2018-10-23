import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Magasin } from '../../../models/msmagasindomains/magasin/magasin.model';

/*
  Generated class for the MagasinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MagasinProvider {
  private dbPath = 'magasins-db';
 
  magasinRef: AngularFireList<Magasin> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello MagasinProvider Provider');
    this.magasinRef = this.db.list(this.dbPath);
  }

 
  createMagasin(p: Magasin): void {
    this.magasinRef.push(p);
  }
 
  updateMagasin(key: string, value: any): void {
    this.magasinRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteMagasin(key: string): void {
    this.magasinRef.remove(key).catch(error => this.handleError(error));
  }
 
  getMagasinList(): AngularFireList<Magasin> {
    return this.magasinRef;
  }
 
  deleteAll(): void {
    this.magasinRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }


}
