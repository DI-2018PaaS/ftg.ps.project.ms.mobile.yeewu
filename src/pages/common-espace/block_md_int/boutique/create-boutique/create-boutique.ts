import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { Boutique } from '../../../../../models/msmagasindomains/boutique/boutique.model';
import { BoutiqueProvider } from '../../../../../providers/msmagasindomains/block_md_int/boutique/boutique';

/**
 * Generated class for the CreateBoutiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-boutique',
  templateUrl: 'create-boutique.html',
})
export class CreateBoutiquePage {

  boutique = {} as Boutique;
  BoutiqueRef$ : AngularFireList<Boutique>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private BoutiqueProvider : BoutiqueProvider) {
    
  }

  
  createNewBoutique (){
     console.log(this.boutique);
     this.BoutiqueProvider.createBoutique({
       ref: this.boutique.ref,
       adresse: this.boutique.adresse,
       description: this.boutique.description,
       nIdProprietaire: 0,
     });

     this.boutique = {} as Boutique;
     this.navCtrl.pop();

      }
}
