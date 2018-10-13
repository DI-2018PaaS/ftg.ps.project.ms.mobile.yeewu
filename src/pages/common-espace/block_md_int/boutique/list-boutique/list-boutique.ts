import { DetailBoutiquePage } from './../detail-boutique/detail-boutique';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { CreateBoutiquePage } from '../create-boutique/create-boutique';
import { DetailMagasinPage } from '../../magasin/detail-magasin/detail-magasin';
import { BoutiqueProvider } from '../../../../../providers/msmagasindomains/block_md_int/boutique/boutique';
import { Boutique } from '../../../../../models/msmagasindomains/boutique/boutique.model';

/**
 * Generated class for the ListBoutiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-boutique',
  templateUrl: 'list-boutique.html',
})
export class ListBoutiquePage {

 boutiques : any;
 boutique : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private boutiqueProvider:BoutiqueProvider) {
    

    this.boutiqueProvider.getBoutiqueList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(boutiques => {
      this.boutiques =boutiques;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoadBoutiqueListPage');
  }

  addNewBoutique() {
    this.navCtrl.push(CreateBoutiquePage);
  }

  editBoutique(p:Boutique) {
    this.navCtrl.push(DetailBoutiquePage,{boutic:p});
  }

  updateBoutique(isActive: boolean) {
    this.boutiqueProvider.updateBoutique(this.boutique.key, { active: isActive });
  }

  deleteBoutique(key: string) {
    this.boutiqueProvider.deleteBoutique(key);
    this.navCtrl.push(ListBoutiquePage);
  } 
}
