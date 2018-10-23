import { DetailCategoriePage } from './..//detail-categorie/detail-categorie';
import { CategorieCreatePage } from './../categorie-create/categorie-create';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { CategorieProvider } from '../../../../providers/msmagasindomains/categorie/categorie.provider';
import { Categorie } from '../../../../models/msmagasindomains/categorie/categorie.model';

/**
 * Generated class for the CategorieListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-categorie-list',
  templateUrl: 'categorie-list.html',
})
export class CategorieListPage {

  categories : any;
  categorie : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private categorieProvider: CategorieProvider) {
    
   
    this.categorieProvider.getCategorieList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(categories => {
      this.categories = categories;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorieListPage');
  }

  addNewCategorie() {
    this.navCtrl.push(CategorieCreatePage);
  }

  editCategorie(p: Categorie) {
    this.navCtrl.push(DetailCategoriePage,{prod:p});
  }

  updateCategorie(isActive: boolean) {
    this.categorieProvider.updateCategorie(this.categorie.key, { active: isActive });
  }

  deleteCategorie(key: string) {
    this.categorieProvider.deleteCategorie(key);
    this.navCtrl.push(CategorieListPage);
  } 
   
}
