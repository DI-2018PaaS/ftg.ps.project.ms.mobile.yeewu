import { DetailEncherePage } from './..//detail-enchere/detail-enchere';
import { EnchereCreatePage } from './../enchere-create/enchere-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { EnchereProvider } from '../../../../providers/msencheresoffres/enchere/enchere.provider';
import { Enchere } from '../../../../models/msencheresoffres/enchere/enchere';

/**
 * Generated class for the EnchereListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-enchere-list',
  templateUrl: 'enchere-list.html',
})
export class EnchereListPage {

  encheres : any;
  enchere : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private enchereProvider: EnchereProvider) {
    
   
    this.enchereProvider.getEnchereList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(encheres => {
      this.encheres = encheres;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnchereListPage');
  }

  addNewEnchere() {
    this.navCtrl.push(EnchereCreatePage);
  }

  editEnchere(p: Enchere) {
    this.navCtrl.push(DetailEncherePage,{prod:p});
  }

  updateEnchere(isActive: boolean) {
    this.enchereProvider.updateEnchere(this.enchere.key, { active: isActive });
  }

  deleteEnchere(key: string) {
    this.enchereProvider.deleteEnchere(key);
    this.navCtrl.push(EnchereListPage);
  } 
   
}
