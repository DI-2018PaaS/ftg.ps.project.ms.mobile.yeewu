import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { /* IonicPage, */ NavController, NavParams } from 'ionic-angular';
import { OffreProvider } from '../../../../providers/msencheresoffres/offre/offre.provider';
import { Offre } from '../../../../models/msencheresoffres/offre/offre';


/**
 * Generated class for the OffreCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-offre-create',
  templateUrl: 'offre-create.html',
})
export class OffreCreatePage {

  offreNew = {} as Offre;
  offreNewRef$ : AngularFireList<Offre>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private offreProvider : OffreProvider) {
    
  }

  
  createNewOffre (){
     console.log(this.offreNew);
     this.offreProvider.createOffre({
      nUniqueOffre: this.offreNew.nUniqueOffre,
		dateLancement: this.offreNew.dateLancement,
		dateClotureOffre: this.offreNew.dateClotureOffre,
		quantiteProduit: this.offreNew.quantiteProduit,
		nAuteurOffre: this.offreNew.nAuteurOffre,
		typeAuteurOffre: this.offreNew.typeAuteurOffre,
		activityID: this.offreNew.activityID,
		typeArticle: this.offreNew.typeArticle,
		contratId: this.offreNew.contratId
     });

     this.offreNew = {} as Offre;
     this.navCtrl.pop();

   }
}
