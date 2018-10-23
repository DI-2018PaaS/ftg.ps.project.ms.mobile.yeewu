import { Animateur } from './../../../models/acteur/animateur/animateur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the AnimateurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimateurProvider {
  private dbPath = 'acteurs-db';
 
  refAnimateurRef: AngularFireList<Animateur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello AnimateurProvider Provider');
    this.refAnimateurRef = this.db.list(this.dbPath);
  }

 
  createAnimateur(p: Animateur): void {
    this.refAnimateurRef.push(p);
  }
 
  updateAnimateur(key: string, value: any): void {
    this.refAnimateurRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteAnimateur(key: string): void {
    this.refAnimateurRef.remove(key).catch(error => this.handleError(error));
  }
 
  getAnimateurList(): AngularFireList<Animateur> {
    return this.refAnimateurRef;
  }
 
  deleteAll(): void {
    this.refAnimateurRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
