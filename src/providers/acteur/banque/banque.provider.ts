import { Banque } from './../../../models/acteur/banque/banque.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the BanqueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BanqueProvider {
  private dbPath = 'acteurs-db';
 
  refBanqueRef: AngularFireList<Banque> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BanqueProvider Provider');
    this.refBanqueRef = this.db.list(this.dbPath);
  }

 
  createBanque(p: Banque): void {
    this.refBanqueRef.push(p);
  }
 
  updateBanque(key: string, value: any): void {
    this.refBanqueRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBanque(key: string): void {
    this.refBanqueRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBanqueList(): AngularFireList<Banque> {
    return this.refBanqueRef;
  }
 
  deleteAll(): void {
    this.refBanqueRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
