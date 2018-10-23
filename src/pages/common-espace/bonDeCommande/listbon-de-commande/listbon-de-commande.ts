import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { CreatebonDeCommandePage } from '../createbon-de-commande/createbon-de-commande';
import { DetailbonDeCommandePage } from '../detailbon-de-commande/detailbon-de-commande';
import { BonCommandeProvider } from '../../../../providers/msmagasindomains/bon-de-commande/bon-de-commande.provider';
import { BonCommande } from '../../../../models/msmagasindomains/bon-commande/bon-commande.model';


/**
 * Generated class for the ListbonDeCommandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listbon-de-commande',
  templateUrl: 'listbon-de-commande.html',
})
export class ListbonDeCommandePage {

  bonCommandes : any;
  bonCommande : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private BonCommandeProvider: BonCommandeProvider) {
    

    this.BonCommandeProvider.getBonCommandeList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(BonCommandes => {
      this.bonCommandes = BonCommandes;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonCommandeListPage');
  }

  addNewBonCommande() {
    this.navCtrl.push(CreatebonDeCommandePage);
  }

  editBonCommande(p: BonCommande) {
    this.navCtrl.push(DetailbonDeCommandePage,{bon:p});
  }

  updateBonCommande(isActive: boolean) {
    this.BonCommandeProvider.updateBonCommande(this.bonCommande.key, { active: isActive });
  }

  deleteBonCommande(key: string) {
    this.BonCommandeProvider.deleteBonCommande(key);
    this.navCtrl.push(ListbonDeCommandePage);
  }
}
