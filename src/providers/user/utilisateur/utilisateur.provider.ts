import { Utilisateur } from './../../../models/user/utilisateur/utilisateur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the UtilisateurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilisateurProvider {
  private dbPath = 'users';
 
  refUtilisateurRef: AngularFireList<Utilisateur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello UtilisateurProvider Provider');
    this.refUtilisateurRef = this.db.list(this.dbPath);
  }

 
  createUtilisateur(p: Utilisateur): void {
    this.refUtilisateurRef.push(p);
  }
 
  updateUtilisateur(key: string, value: any): void {
    this.refUtilisateurRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteUtilisateur(key: string): void {
    this.refUtilisateurRef.remove(key).catch(error => this.handleError(error));
  }
 
  getUtilisateurList(): AngularFireList<Utilisateur> {
    return this.refUtilisateurRef;
  }
 
  deleteAll(): void {
    this.refUtilisateurRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
