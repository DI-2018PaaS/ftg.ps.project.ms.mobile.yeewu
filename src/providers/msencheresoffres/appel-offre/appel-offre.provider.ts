import { AppelOffre } from './../../../models/msencheresoffres/appel-offre/appel-offre';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the AppelOffreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppelOffreProvider {
  private dbPath = 'firebaseDecl';
 
  refAppelOffreRef: AngularFireList<AppelOffre> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello AppelOffreProvider Provider');
    this.refAppelOffreRef = this.db.list(this.dbPath);
  }

 
  createAppelOffre(p: AppelOffre): void {
    this.refAppelOffreRef.push(p);
  }
 
  updateAppelOffre(key: string, value: any): void {
    this.refAppelOffreRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteAppelOffre(key: string): void {
    this.refAppelOffreRef.remove(key).catch(error => this.handleError(error));
  }
 
  getAppelOffreList(): AngularFireList<AppelOffre> {
    return this.refAppelOffreRef;
  }
 
  deleteAll(): void {
    this.refAppelOffreRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
