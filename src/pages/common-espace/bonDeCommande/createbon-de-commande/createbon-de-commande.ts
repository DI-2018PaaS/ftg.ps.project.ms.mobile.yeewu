import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { BonCommandeProvider } from '../../../../providers/msmagasindomains/bon-de-commande/bon-de-commande.provider';
import { BonCommande } from '../../../../models/msmagasindomains/bon-commande/bon-commande.model';

/**
 * Generated class for the CreatebonDeCommandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createbon-de-commande',
  templateUrl: 'createbon-de-commande.html',
})
export class CreatebonDeCommandePage {

  bonCommandeNew = {} as BonCommande;
  bonCommandeNewRef$ : AngularFireList<BonCommande>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private bonCommandeProvider : BonCommandeProvider) {
    
  }

  
  createNewBonCommande (){
     console.log(this.bonCommandeNew);
     this.bonCommandeProvider.createBonCommande({
       numero: this.bonCommandeNew.numero,
       acheteurId: this.bonCommandeNew.acheteurId,
       dateEmission: this.bonCommandeNew.dateEmission,
       dateReglement: this.bonCommandeNew.dateReglement,
       reglementCmdId: this.bonCommandeNew.reglementCmdId,

      

     });

     this.bonCommandeNew = {} as BonCommande;
     this.navCtrl.pop();

      }
}
