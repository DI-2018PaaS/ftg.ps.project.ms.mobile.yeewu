import { Service } from './../../../models/msmagasindomains/service/service.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  private dbPath = 'services-db';
 
  refServiceRef: AngularFireList<Service> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ServiceProvider Provider');
    this.refServiceRef = this.db.list(this.dbPath);
  }

 
  createService(p: Service): void {
    this.refServiceRef.push(p);
  }
 
  updateService(key: string, value: any): void {
    this.refServiceRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteService(key: string): void {
    this.refServiceRef.remove(key).catch(error => this.handleError(error));
  }
 
  getServiceList(): AngularFireList<Service> {
    return this.refServiceRef;
  }
 
  deleteAll(): void {
    this.refServiceRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
