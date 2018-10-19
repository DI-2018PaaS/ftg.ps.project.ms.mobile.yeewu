import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */export interface PageInterface{
   title :string;
   pageName:string;
   tabComponent?:any;
   index:number;
   icon:string;
 }
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav : Nav;

  pages : PageInterface[]=[
    {title:"Produit", pageName: "TabsPage", tabComponent: "ProduitListPage", index: 0, icon: "ios-apps-outline" },
    {title:"Fournisseur", pageName: "TabsPage", tabComponent: "ListFournisseurPage", index: 1, icon: "ios-cube-outline" },
    {title:"Magasin", pageName: "TabsPage", tabComponent: "ListMagasinPage", index: 2, icon: "ios-basket-outline" },
    {title:"boutique", pageName: "TabsPage", tabComponent: "ListBoutiquePage", index: 3, icon: "ios-beaker-outline" }
   // {title:"produit", pageName: "special",  icon: "home" }
  ];

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
}
