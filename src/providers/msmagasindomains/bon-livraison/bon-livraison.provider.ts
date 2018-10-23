import { BonLivraison } from './../../../models/msmagasindomains/bon-livraison/bon-livraison.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the BonLivraisonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BonLivraisonProvider {
  private dbPath = 'livraisons-db';
 
  refBonLivraisonRef: AngularFireList<BonLivraison> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BonLivraisonProvider Provider');
    this.refBonLivraisonRef = this.db.list(this.dbPath);
  }

 
  createBonLivraison(p: BonLivraison): void {
    this.refBonLivraisonRef.push(p);
  }
 
  updateBonLivraison(key: string, value: any): void {
    this.refBonLivraisonRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBonLivraison(key: string): void {
    this.refBonLivraisonRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBonLivraisonList(): AngularFireList<BonLivraison> {
    return this.refBonLivraisonRef;
  }
 
  deleteAll(): void {
    this.refBonLivraisonRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
