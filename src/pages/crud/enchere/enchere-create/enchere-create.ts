import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { Enchere } from '../../../../models/msencheresoffres/enchere/enchere';
import { EnchereProvider } from '../../../../providers/msencheresoffres/enchere/enchere.provider';

/**
 * Generated class for the EnchereCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-enchere-create',
  templateUrl: 'enchere-create.html',
})
export class EnchereCreatePage {

  enchereNew = {} as Enchere;
  enchereNewRef$ : AngularFireList<Enchere>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private enchereProvider : EnchereProvider) {
    
  }

  
  createNewEnchere (){
     console.log(this.enchereNew);
     this.enchereProvider.createEnchere({
       nUniqueEnchere: this.enchereNew.nUniqueEnchere,
		dateLancementEnchere: this.enchereNew.dateLancementEnchere,
		dateClotureEnchere: this.enchereNew.dateClotureEnchere,
		quantiteProduit: this.enchereNew.quantiteProduit,
		nAuteurEnchere: this.enchereNew.nAuteurEnchere,
		typeAuteurEnchere: this.enchereNew.typeAuteurEnchere,
		prixDepart: this.enchereNew.prixDepart,
		prixCourant: this.enchereNew.prixCourant,
		prixDeVente: this.enchereNew.prixDeVente,
		activityID: this.enchereNew.activityID,
		nArticles: this.enchereNew.nArticles,
		contratId: this.enchereNew.contratId
     });

     this.enchereNew = {} as Enchere;
     this.navCtrl.pop();

   }
}
