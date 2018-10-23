import { DetailDomainePage } from './..//detail-domaine/detail-domaine';
import { DomaineCreatePage } from './../domaine-create/domaine-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { DomaineProvider } from '../../../../providers/domaines/domaine/domaine.provider';
import { Domaine } from '../../../../models/domaines/domaine/domaine.model';

/**
 * Generated class for the DomaineListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-domaine-list',
  templateUrl: 'domaine-list.html',
})
export class DomaineListPage {

  domaines : any;
  domaine : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private domaineProvider: DomaineProvider) {
    
   
    this.domaineProvider.getDomaineList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(domaines => {
      this.domaines = domaines;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomaineListPage');
  }

  addNewDomaine() {
    this.navCtrl.push(DomaineCreatePage);
  }

  editDomaine(p: Domaine) {
    this.navCtrl.push(DetailDomainePage,{prod:p});
  }

  updateDomaine(isActive: boolean) {
    this.domaineProvider.updateDomaine(this.domaine.key, { active: isActive });
  }

  deleteDomaine(key: string) {
    this.domaineProvider.deleteDomaine(key);
    this.navCtrl.push(DomaineListPage);
  } 
   
}
