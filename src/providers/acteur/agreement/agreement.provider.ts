import { Agreement } from './../../../models/acteur/agreement/agreement.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the AgreementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgreementProvider {
  private dbPath = 'firebaseDecl';
 
  refAgreementRef: AngularFireList<Agreement> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello AgreementProvider Provider');
    this.refAgreementRef = this.db.list(this.dbPath);
  }

 
  createAgreement(p: Agreement): void {
    this.refAgreementRef.push(p);
  }
 
  updateAgreement(key: string, value: any): void {
    this.refAgreementRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteAgreement(key: string): void {
    this.refAgreementRef.remove(key).catch(error => this.handleError(error));
  }
 
  getAgreementList(): AngularFireList<Agreement> {
    return this.refAgreementRef;
  }
 
  deleteAll(): void {
    this.refAgreementRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
