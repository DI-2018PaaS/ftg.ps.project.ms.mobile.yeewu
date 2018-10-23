import { Component,Input, ViewChild } from '@angular/core';
import { IonicPage, Content, FabButton } from 'ionic-angular';
import { NavController, Slides, PopoverController, LoadingController, ModalController, FabContainer } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';

import { SocialSharing } from '@ionic-native/social-sharing';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { md5 } from './md5';
import { LoginPage } from '../../common/login/login';
import { TrierPage } from '../../common/trier/trier';
import { FiltrerPage } from '../../common/filtrer/filtrer';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingService } from '../../../services/loading-service';
import { ToastService } from '../../../services/toast-service';
import { IonicRatingModule } from 'ionic-rating';
import { Enchere } from '../../../models/msencheresoffres/enchere/enchere';


@Component({
  selector: 'page-enchere',
  templateUrl: 'enchere.html'
})
export class EncherePage 
{
  rate : any = 0;
  eltModel = {} as Enchere;
  enchere_imgs=[
    'enchere-1.PNG',
    'enchere-2.PNG',
    'enchere-3.PNG',
    'enchere-4.PNG'
  ];
  constructor(public navCtrl: NavController) {    }
  
  goToEnchere(params){
        if (!params) params = {};
        this.navCtrl.push(EncherePage);
    }goToFiltrer(params){
      if (!params) params = {};
      this.navCtrl.push(FiltrerPage);
    }goToTrier(params){
      if (!params) params = {};
      this.navCtrl.push(TrierPage);
    }goToConnexion(params){
        if (!params) params = {};
        this.navCtrl.push(LoginPage);
    }
    onModelChange(event){
      this.rate = event;
      console.log(event);
      }
  }