import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { Categorie } from '../../../../models/msmagasindomains/categorie/categorie.model';
import { CategorieProvider } from '../../../../providers/msmagasindomains/categorie/categorie.provider';


/**
 * Generated class for the CategorieCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-categorie-create',
  templateUrl: 'categorie-create.html',
})
export class CategorieCreatePage {

  categorieNew = {} as Categorie;
  categorieNewRef$ : AngularFireList<Categorie>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private categorieProvider : CategorieProvider) {
    
  }
  
  createNewCategorie (){
     console.log(this.categorieNew);
     this.categorieProvider.createCategorie({
       catUniqueID: this.categorieNew.catUniqueID,
       Nom: this.categorieNew.Nom,
       Description: this.categorieNew.Description
     });

     this.categorieNew = {} as Categorie;
     this.navCtrl.pop();

   }
}
