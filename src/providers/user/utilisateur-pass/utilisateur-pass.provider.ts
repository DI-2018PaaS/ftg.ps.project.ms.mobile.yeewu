import { UtilisateurMotDePasse } from './../../../models/user/utilisateur-pass/utilisateur-pass.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the UtilisateurMotDePasseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilisateurMotDePasseProvider {
  private dbPath = 'userpasses';
 
  refUtilisateurMotDePasseRef: AngularFireList<UtilisateurMotDePasse> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello UtilisateurMotDePasseProvider Provider');
    this.refUtilisateurMotDePasseRef = this.db.list(this.dbPath);
  }

 
  createUtilisateurMotDePasse(p: UtilisateurMotDePasse): void {
    this.refUtilisateurMotDePasseRef.push(p);
  }
 
  updateUtilisateurMotDePasse(key: string, value: any): void {
    this.refUtilisateurMotDePasseRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteUtilisateurMotDePasse(key: string): void {
    this.refUtilisateurMotDePasseRef.remove(key).catch(error => this.handleError(error));
  }
 
  getUtilisateurMotDePasseList(): AngularFireList<UtilisateurMotDePasse> {
    return this.refUtilisateurMotDePasseRef;
  }
 
  deleteAll(): void {
    this.refUtilisateurMotDePasseRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
