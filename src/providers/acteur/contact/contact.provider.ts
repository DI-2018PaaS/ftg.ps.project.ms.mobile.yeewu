import { Contact } from './../../../models/acteur/contact/contact.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {
  private dbPath = 'acteurs-db';
 
  refContactRef: AngularFireList<Contact> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ContactProvider Provider');
    this.refContactRef = this.db.list(this.dbPath);
  }

 
  createContact(p: Contact): void {
    this.refContactRef.push(p);
  }
 
  updateContact(key: string, value: any): void {
    this.refContactRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteContact(key: string): void {
    this.refContactRef.remove(key).catch(error => this.handleError(error));
  }
 
  getContactList(): AngularFireList<Contact> {
    return this.refContactRef;
  }
 
  deleteAll(): void {
    this.refContactRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
