import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailMagasinPage } from '../detail-magasin/detail-magasin';
import { CreateMagasinPage } from '../create-magasin/create-magasin';
import { map } from 'rxjs/operators';
import { MagasinProvider } from '../../../../../providers/msmagasindomains/block_md_int/magasin/magasin';
import { Magasin } from '../../../../../models/msmagasindomains/magasin/magasin.model';

/**
 * Generated class for the ListMagasinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-magasin',
  templateUrl: 'list-magasin.html',
})
export class ListMagasinPage {

  magasins : any;
  magasin : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private magasinProvider: MagasinProvider) {
    
    this.magasinProvider.getMagasinList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(Magasins => {
      this.magasins = Magasins;
    }); 

  }

 

  addNewMagasin() {
    this.navCtrl.push(CreateMagasinPage);
  }

  editMagasin(p: Magasin) {
    this.navCtrl.push(DetailMagasinPage,{mag:p});
  }

  updateMagasin(isActive: boolean) {
    this.magasinProvider.updateMagasin(this.magasin.key, { active: isActive });
  }

  deleteMagasin(key: string) {
    this.magasinProvider.deleteMagasin(key);
    this.navCtrl.push(ListMagasinPage);
  } 
   
}
