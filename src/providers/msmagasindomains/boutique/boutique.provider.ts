import { Boutique } from './../../../models/msmagasindomains/boutique/boutique.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the BoutiqueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BoutiqueProvider {
  private dbPath = 'firebaseDecl';
 
  refBoutiqueRef: AngularFireList<Boutique> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BoutiqueProvider Provider');
    this.refBoutiqueRef = this.db.list(this.dbPath);
  }

 
  createBoutique(p: Boutique): void {
    this.refBoutiqueRef.push(p);
  }
 
  updateBoutique(key: string, value: any): void {
    this.refBoutiqueRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBoutique(key: string): void {
    this.refBoutiqueRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBoutiqueList(): AngularFireList<Boutique> {
    return this.refBoutiqueRef;
  }
 
  deleteAll(): void {
    this.refBoutiqueRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
