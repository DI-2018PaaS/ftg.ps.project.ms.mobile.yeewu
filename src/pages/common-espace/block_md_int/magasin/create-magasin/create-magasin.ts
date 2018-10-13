import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { Magasin } from '../../../../../models/msmagasindomains/magasin/magasin.model';
import { MagasinProvider } from '../../../../../providers/msmagasindomains/block_md_int/magasin/magasin';

/**
 * Generated class for the CreateMagasinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-magasin',
  templateUrl: 'create-magasin.html',
})
export class CreateMagasinPage {

  magasin = {} as Magasin;
  magasinRef$ : AngularFireList<Magasin>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private magasinProvider : MagasinProvider) {
    
  }

  
  createNewMagasin (){
     console.log(this.magasin);
     this.magasinProvider.createMagasin({
       ref: this.magasin.ref,
       adresse: this.magasin.adresse,
       description: this.magasin.description,
       nIdProprietaire: 0,
     });

     this.magasin = {} as Magasin;
     this.navCtrl.pop();

      }
}
