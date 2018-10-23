import { BanqueActeur } from './../../../models/acteur/banque-acteur/banque-acteur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the BanqueActeurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BanqueActeurProvider {
  private dbPath = 'acteurs-db';
 
  refBanqueActeurRef: AngularFireList<BanqueActeur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BanqueActeurProvider Provider');
    this.refBanqueActeurRef = this.db.list(this.dbPath);
  }

 
  createBanqueActeur(p: BanqueActeur): void {
    this.refBanqueActeurRef.push(p);
  }
 
  updateBanqueActeur(key: string, value: any): void {
    this.refBanqueActeurRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBanqueActeur(key: string): void {
    this.refBanqueActeurRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBanqueActeurList(): AngularFireList<BanqueActeur> {
    return this.refBanqueActeurRef;
  }
 
  deleteAll(): void {
    this.refBanqueActeurRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
