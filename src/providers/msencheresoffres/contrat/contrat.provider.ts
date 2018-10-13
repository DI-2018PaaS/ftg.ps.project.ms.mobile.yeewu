import { Contrat } from './../../../models/msencheresoffres/contrat/contrat';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ContratProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContratProvider {
  private dbPath = 'firebaseDecl';
 
  refContratRef: AngularFireList<Contrat> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ContratProvider Provider');
    this.refContratRef = this.db.list(this.dbPath);
  }

 
  createContrat(p: Contrat): void {
    this.refContratRef.push(p);
  }
 
  updateContrat(key: string, value: any): void {
    this.refContratRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteContrat(key: string): void {
    this.refContratRef.remove(key).catch(error => this.handleError(error));
  }
 
  getContratList(): AngularFireList<Contrat> {
    return this.refContratRef;
  }
 
  deleteAll(): void {
    this.refContratRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
