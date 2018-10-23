import { DetailCategoriePage } from './../detail-categorie/detail-categorie';
import { CategorieListPage } from './../categorie-list/categorie-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategorieProvider } from '../../../../providers/msmagasindomains/categorie/categorie.provider';


/**
 * Generated class for the CategorieEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorie-edit',
  templateUrl: 'categorie-edit.html',
})
export class CategorieEditPage {

   categorie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public categorieProvider: CategorieProvider) {
    this.categorie = navParams.get('prod'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorieEditPage');
  }


  updateCategorie() {
    this.categorieProvider.updateCategorie( this.categorie.key, { active: true });
    this.navCtrl.push(DetailCategoriePage,{prod: this.categorie});
  }
 

  deleteCategorie(key:string) {
    this.categorieProvider.deleteCategorie(key);
    this.navCtrl.push(CategorieListPage);
  }
  
}

