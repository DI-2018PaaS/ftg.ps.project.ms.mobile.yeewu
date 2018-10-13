import { BoutiqueService } from './../../../models/msmagasindomains/boutique-service/boutique-service.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the BoutiqueServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BoutiqueServiceProvider {
  private dbPath = 'firebaseDecl';
 
  refBoutiqueServiceRef: AngularFireList<BoutiqueService> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello BoutiqueServiceProvider Provider');
    this.refBoutiqueServiceRef = this.db.list(this.dbPath);
  }

 
  createBoutiqueService(p: BoutiqueService): void {
    this.refBoutiqueServiceRef.push(p);
  }
 
  updateBoutiqueService(key: string, value: any): void {
    this.refBoutiqueServiceRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBoutiqueService(key: string): void {
    this.refBoutiqueServiceRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBoutiqueServiceList(): AngularFireList<BoutiqueService> {
    return this.refBoutiqueServiceRef;
  }
 
  deleteAll(): void {
    this.refBoutiqueServiceRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
