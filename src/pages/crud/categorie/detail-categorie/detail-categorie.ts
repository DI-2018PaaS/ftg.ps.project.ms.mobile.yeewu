import { CategorieListPage } from './../categorie-list/categorie-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategorieEditPage } from '../categorie-edit/categorie-edit';
import { CategorieProvider } from '../../../../providers/msmagasindomains/categorie/categorie.provider';

/**
 * Generated class for the DetailCategoriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-categorie',
  templateUrl: 'detail-categorie.html',
})
export class DetailCategoriePage {
  categorie: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public categorieProvider: CategorieProvider) {
    this.categorie = navParams.get('prod'); 
  }
  
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorieEditPage');
  }

  updateCategorie(key:string, isActive: boolean) {
    this.categorieProvider.updateCategorie(key, { active: isActive });
  }
 
  deleteCategorie(key:string) {
    this.categorieProvider.deleteCategorie(key);
    this.navCtrl.push(CategorieListPage);
  }

  editCategorie()
  {
    this.navCtrl.push(CategorieEditPage, {prod :  this.categorie});
  }
}
