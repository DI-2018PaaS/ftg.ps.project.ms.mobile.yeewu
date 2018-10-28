import { PanierPage } from './../../common/panier/panier';
import { DetailProduitByActivitePage } from './../detail-produit-by-activite/detail-produit-by-activite';
import { Produit } from './../../../models/msmagasindomains/produit/produit.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { ProduitProvider } from '../../../providers/msmagasindomains/produit/produit.provider';
import { CartService } from '../../../providers/common/cart.service';
import { AuthService } from '../../../providers/common/auth.service';

@Component({
  selector: 'page-activite',
  templateUrl: 'activite.html'
})
export class ActivitePage {

  produits:any;
  datas = [
    {
      title: 'Produit A',
      description: 'Slider Produit A',
      image:'assets/img/slide_a.png'
    },
    {
      title: 'Produit B',
      description: 'Slider Produit B',
      image:'assets/img/slide_b.png'
    },
    {
      title: 'Produit C',
      description: 'Slider Produit C',
      image:'assets/img/slide_c.png'
    }
	]
	activities = [
    {
      title: 'Produit A',
      description: 'Slider Produit A',
      image:'assets/img/sli_a.jpg'
    },
    {
      title: 'Produit B',
      description: 'Slider Produit B',
      image:'assets/img/sli_b.jpg'
    },
    {
      title: 'Produit C',
      description: 'Slider Produit C',
      image:'assets/img/sli_c.jpg'
    }
  ]
  constructor(public navCtrl: NavController,
  public produitProvider:ProduitProvider,
   private viewCtrl: ViewController,
   public cartService: CartService,
   public authService: AuthService
  ) {
   this.getListProduitByActivite();
   //cartService.loadCartList(this.authService.getLoggedUID());

  }
  
getListProduitByActivite()
{
    this.produitProvider.getProduitList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(produits => {
      this.produits = produits;
    }); 

  
}
addOnPanier(p:Produit)
{
 // this.navCtrl.push(DetailProduitPage,{prod:p});
}

/*showDetails(product)  : void  {
    this.navCtrl.push(ProductDetailsPage,product);
  }
*/
/*goToDetailProduit(p:Produit)
{
  this.navCtrl.push(DetailProduitByActivitePage,{prod:p});
}*/
goToDetailProduit(p:Produit)
{
  this.navCtrl.push(DetailProduitByActivitePage,{prod:p});
}
  //addOnPanier(product)  : void  {
    //this.cartService.addCartItem(this.authService.getLoggedUID(), product);
  //}
  
  gotoRating(product)  : void  {
    //this.cartService.addCartItem(this.authService.getLoggedUID(), product);
  }
  openCart() : void {
    //this.navCtrl.push(CartPage);
  }

  getItems(event) : void{
    // TODO : search
  }

  applyCategoryFilter(event) : void{
    // TODO : filter
  }
  showPanier()
  {
        this.navCtrl.push(PanierPage);

  }
}
