import { DetailActivitePage } from './..//detail-activite/detail-activite';
import { ActiviteCreatePage } from './../activite-create/activite-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { ActiviteProvider } from '../../../../providers/domaines/activite/activite.provider';
import { Activite } from '../../../../models/domaines/activite/activite.model';

/**
 * Generated class for the ActiviteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-activite-list',
  templateUrl: 'activite-list.html',
})
export class ActiviteListPage {

  activites : any;
  activite : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private activiteProvider: ActiviteProvider) {
    
   
    this.activiteProvider.getActiviteList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(activites => {
      this.activites = activites;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiviteListPage');
  }

  addNewActivite() {
    this.navCtrl.push(ActiviteCreatePage);
  }

  editActivite(p: Activite) {
    this.navCtrl.push(DetailActivitePage,{prod:p});
  }

  updateActivite(isActive: boolean) {
    this.activiteProvider.updateActivite(this.activite.key, { active: isActive });
  }

  deleteActivite(key: string) {
    this.activiteProvider.deleteActivite(key);
    this.navCtrl.push(ActiviteListPage);
  } 
   
}
