import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Categorie } from '../../../models/msmagasindomains/categorie/categorie.model';

/*
  Generated class for the CategorieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategorieProvider {
  private dbPath = 'categories-db';
 
  categorieRef: AngularFireList<Categorie> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello CategorieProvider Provider');
    this.categorieRef = this.db.list(this.dbPath);
  }

 
  createCategorie(p: Categorie): void {
    this.categorieRef.push(p);
  }
 
  updateCategorie(key: string, value: any): void {
    this.categorieRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteCategorie(key: string): void {
    this.categorieRef.remove(key).catch(error => this.handleError(error));
  }
 
  getCategorieList(): AngularFireList<Categorie> {
    return this.categorieRef;
  }

  deleteAll(): void {
    this.categorieRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  } 
}


