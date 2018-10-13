import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Boutique } from '../../../../models/msmagasindomains/boutique/boutique.model';

/*
  Generated class for the BoutiqueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BoutiqueProvider {
  private dbPath = 'list-Boutique';
 
  boutiqueRef: AngularFireList<Boutique> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BoutiqueProvider Provider');
    this.boutiqueRef = this.db.list(this.dbPath);
  }

 
  createBoutique(p: Boutique): void {
    this.boutiqueRef.push(p);
  }
 
  updateBoutique(key: string, value: any): void {
    this.boutiqueRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBoutique(key: string): void {
    this.boutiqueRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBoutiqueList(): AngularFireList<Boutique> {
    return this.boutiqueRef;
  }

  deleteAll(): void {
    this.boutiqueRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  } 
}


