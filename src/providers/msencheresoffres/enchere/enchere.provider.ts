import { Enchere } from './../../../models/msencheresoffres/enchere/enchere';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the EnchereProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnchereProvider {
  private dbPath = 'msencheresoffres-db';
 
  refEnchereRef: AngularFireList<Enchere> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello EnchereProvider Provider');
    this.refEnchereRef = this.db.list(this.dbPath);
  }

 
  createEnchere(p: Enchere): void {
    this.refEnchereRef.push(p);
  }
 
  updateEnchere(key: string, value: any): void {
    this.refEnchereRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteEnchere(key: string): void {
    this.refEnchereRef.remove(key).catch(error => this.handleError(error));
  }
 
  getEnchereList(): AngularFireList<Enchere> {
    return this.refEnchereRef;
  }
 
  deleteAll(): void {
    this.refEnchereRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
