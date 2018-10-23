import { ZoneGeographique,ZoneGeographiqueActeur } from './../../../models/acteur/zone/zone';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

/*
  Generated class for the ZoneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ZoneProvider {
  private dbPath = 'acteurs-db';
 
  refZoneRef: AngularFireList<ZoneGeographique> = null;
  
  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ZoneProvider Provider');
    this.refZoneRef = this.db.list(this.dbPath);
  }

 
  createZone(p: ZoneGeographique): void {
    this.refZoneRef.push(p);
  }
 
  updateZone(key: string, value: any): void {
    this.refZoneRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteZone(key: string): void {
    this.refZoneRef.remove(key).catch(error => this.handleError(error));
  }
 
  getZoneList(): AngularFireList<ZoneGeographique> {
    return this.refZoneRef;
  }
 
  deleteAll(): void {
    this.refZoneRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
