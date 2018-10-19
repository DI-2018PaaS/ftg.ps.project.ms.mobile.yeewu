import { PanierPage } from './../pages/common/panier/panier';
import { DetailProduitByActivitePage } from './../pages/front_office/detail-produit-by-activite/detail-produit-by-activite';
import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Common Espace
import { PlafondLigneDeCreditPage } from '../pages/common-espace/plafond-ligne-de-credit/plafond-ligne-de-credit';
import { PlafondLigneDeDepotsPage } from '../pages/common-espace/plafond-ligne-de-depots/plafond-ligne-de-depots';
import { RemboursementPretPage } from '../pages/common-espace/remboursement-pret/remboursement-pret';
import { GestionDuStockPage } from '../pages/common-espace/gestion-du-stock/gestion-du-stock';
import { GestionDesPaiementsPage } from '../pages/common-espace/gestion-des-paiements/gestion-des-paiements';
import { GestionPaiementIDPage } from '../pages/common-espace/gestion-paiement-id/gestion-paiement-id';
import { GestionLivraisonIDPage } from '../pages/common-espace/gestion-livraison-id/gestion-livraison-id';
import { GestionRemboursementIDPage } from '../pages/common-espace/gestion-remboursement-id/gestion-remboursement-id';
import { GestionDepotIDPage } from '../pages/common-espace/gestion-depot-id/gestion-depot-id';
import { GestionCreditIDPage } from '../pages/common-espace/gestion-credit-id/gestion-credit-id';
import { GestionMagasinIDPage } from '../pages/common-espace/gestion-magasin-id/gestion-magasin-id';
import { GestionDesCommandesLPage } from '../pages/common-espace/gestion-des-commandes-l/gestion-des-commandes-l';
import { GestionSuiviCommandePage } from '../pages/common-espace/gestion-suivi-commande/gestion-suivi-commande';
import { GestionSuiviLivraisonPage } from '../pages/common-espace/gestion-suivi-livraison/gestion-suivi-livraison';
import { GestionSuiviDemandesPage } from '../pages/common-espace/gestion-suivi-demandes/gestion-suivi-demandes';
import { GestionSuiviPretPage } from '../pages/common-espace/gestion-suivi-pret/gestion-suivi-pret';
import { GestionSuiviCreditPage } from '../pages/common-espace/gestion-suivi-credit/gestion-suivi-credit';
import { GestionSuiviDepotPage } from '../pages/common-espace/gestion-suivi-depot/gestion-suivi-depot';
import { GestionSuiviDevisPage } from '../pages/common-espace/gestion-suivi-devis/gestion-suivi-devis';
import { GestionSuiviEncheresPage } from '../pages/common-espace/gestion-suivi-encheres/gestion-suivi-encheres';
import { GestionSuiviNotationsPage } from '../pages/common-espace/gestion-suivi-notations/gestion-suivi-notations';
import { GestionSuiviProduitsPage } from '../pages/common-espace/gestion-suivi-produits/gestion-suivi-produits';
import { DetailCommandePage } from '../pages/common-espace/detail-commande/detail-commande';
import { DetailLivraisonPage } from '../pages/common-espace/detail-livraison/detail-livraison';
import { DetailDemandePage } from '../pages/common-espace/detail-demande/detail-demande';
import { DetailPretPage } from '../pages/common-espace/detail-pret/detail-pret';
import { DetailCreditPage } from '../pages/common-espace/detail-credit/detail-credit';
import { DetailDepotPage } from '../pages/common-espace/detail-depot/detail-depot';
import { DetailDevisPage } from '../pages/common-espace/detail-devis/detail-devis';
import { DetailEncherePage } from '../pages/common-espace/detail-enchere/detail-enchere';
import { DetailNotationPage } from '../pages/common-espace/detail-notation/detail-notation';
import { DetailUserPage } from '../pages/common-espace/detail-user/detail-user';
import { GestionListeLivraisonPage } from '../pages/common-espace/gestion-liste-livraison/gestion-liste-livraison';

// Espace Admin
import { AdministrateurHomePage } from '../pages/admin_space/administrateur-home/administrateur-home';
import { AdministrateurSuiviPage } from '../pages/admin_space/administrateur-suivi/administrateur-suivi';
import { AdministrateurStatistiquesPage } from '../pages/admin_space/administrateur-statistiques/administrateur-statistiques';
import { AdminTabsControllerPage } from '../pages/admin_space/admin-tabs-controller/admin-tabs-controller';

// Animateur
import { AnimateurHomePage } from '../pages/anim_space/animateur-home/animateur-home';
import { AnimateurSuiviPage } from '../pages/anim_space/animateur-suivi/animateur-suivi';
import { AnimateurStatistiquesPage } from '../pages/anim_space/animateur-statistiques/animateur-statistiques';
import { AnimTabsControllerPage } from '../pages/anim_space/anim-tabs-controller/anim-tabs-controller';

// Fournisseur
import { FournisseurHomePage } from '../pages/fournisseur_space/fournisseur-home/fournisseur-home';
import { FournisseurSuiviPage } from '../pages/fournisseur_space/fournisseur-suivi/fournisseur-suivi';
import { FournisseurStatistiquesPage } from '../pages/fournisseur_space/fournisseur-statistiques/fournisseur-statistiques';
import { FournisseurTabsControllerPage } from '../pages/fournisseur_space/fournisseur-tabs-controller/fournisseur-tabs-controller';

// Client
import { ClientHomePage } from '../pages/client_space/client-home/client-home';
import { ClientSuiviPage } from '../pages/client_space/client-suivi/client-suivi';
import { ClientStatistiquesPage } from '../pages/client_space/client-statistiques/client-statistiques';
import { ClientTabsControllerPage } from '../pages/client_space/client-tabs-controller/client-tabs-controller';

// Banque
import { BanqueHomePage } from '../pages/banque_space/banque-home/banque-home';
import { BanqueSuiviPage } from '../pages/banque_space/banque-suivi/banque-suivi';
import { BanqueStatistiquesPage } from '../pages/banque_space/banque-statistiques/banque-statistiques';
import { BanqueTabsControllerPage } from '../pages/banque_space/banque-tabs-controller/banque-tabs-controller';

// Multirole
import { MultiroleHomePage } from '../pages/multirole_space/multirole-home/multirole-home';

// Others
import { SplashScreenPage } from '../pages/common/splash-screen/splash-screen';
import { LoginPage } from '../pages/common/login/login';
import { InscriptionPage } from '../pages/common/inscription/inscription';
import { InscriptionOKPage } from '../pages/common/inscription-ok/inscription-ok';
import { MotDePasseOubliPage } from '../pages/common/mot-de-passe-oubli/mot-de-passe-oubli';
import { RecherchePage } from '../pages/common/recherche/recherche';
import { FiltrerPage } from '../pages/common/filtrer/filtrer';
import { TrierPage } from '../pages/common/trier/trier';
import { CreerComptePage } from '../pages/crud/creer-compte/creer-compte';
import { ViewComptePage } from '../pages/crud/view-compte/view-compte';
import { CreerTypeActeurPage } from '../pages/crud/creer-type-acteur/creer-type-acteur';
import { CreerZonePage } from '../pages/crud/creer-zone/creer-zone';
import { CreerActivitPage } from '../pages/crud/creer-activit/creer-activit';
import { CreerDomainePage } from '../pages/crud/creer-domaine/creer-domaine';
import { CreerEncherePage } from '../pages/crud/creer-enchere/creer-enchere';
import { CreerOffrePage } from '../pages/crud/creer-offre/creer-offre';
import { CreerOperationPage } from '../pages/crud/creer-operation/creer-operation';
import { CreerRolePage } from '../pages/crud/creer-role/creer-role';
import { CreerBoutiquePage } from '../pages/crud/creer-boutique/creer-boutique';
import { CreerMagasinPage } from '../pages/crud/creer-magasin/creer-magasin';
import { CreerProduitPage } from '../pages/crud/creer-produit/creer-produit';
import { CreerServicePage } from '../pages/crud/creer-service/creer-service';
import { CreerCategoriePage } from '../pages/crud/creer-categorie/creer-categorie';
import { EditerComptePage } from '../pages/crud/editer-compte/editer-compte';
import { EditerZonePage } from '../pages/crud/editer-zone/editer-zone';
import { EditerTypeActeurPage } from '../pages/crud/editer-type-acteur/editer-type-acteur';
import { EditerActivitPage } from '../pages/crud/editer-activit/editer-activit';
import { EditerDomainePage } from '../pages/crud/editer-domaine/editer-domaine';
import { EditerEncherePage } from '../pages/crud/editer-enchere/editer-enchere';
import { EditerOffrePage } from '../pages/crud/editer-offre/editer-offre';
import { EditerOperationPage } from '../pages/crud/editer-operation/editer-operation';
import { EditerRolePage } from '../pages/crud/editer-role/editer-role';
import { EditerMagasinPage } from '../pages/crud/editer-magasin/editer-magasin';
import { EditerBoutiquePage } from '../pages/crud/editer-boutique/editer-boutique';
import { EditerProduitPage } from '../pages/crud/editer-produit/editer-produit';
import { EditerServicePage } from '../pages/crud/editer-service/editer-service';
import { EditerCategoriePage } from '../pages/crud/editer-categorie/editer-categorie';


// espace front
import { HomeDomainePage } from '../pages/front_office/home-domaine/home-domaine';
import { RatingPage } from '../pages/front_office/rating/rating';
import { FournisseurPage } from '../pages/front_office/fournisseur/fournisseur';
import { CommentairePage } from '../pages/front_office/commentaire/commentaire';
import { EncheresPage } from '../pages/front_office/encheres/encheres';
import { EncherePage } from '../pages/front_office/enchere/enchere';
import { OffresPage } from '../pages/front_office/offres/offres';
import { DevisPage } from '../pages/front_office/devis/devis';
import { DevisOffrePage } from '../pages/front_office/devis-offre/devis-offre';
import { EnvoiSuccesPage } from '../pages/front_office/envoi-succes/envoi-succes';
import { EchecEnvoiPage } from '../pages/front_office/echec-envoi/echec-envoi';
import { DomainePage } from '../pages/front_office/domaine/domaine';
import { ActivitePage } from '../pages/front_office/activite/activite';

// Integration part MD
import { MenuPageModule } from './../pages/fournisseur_space/menu/menu.module';

import { DetailProduitPage } from './../pages/common-espace/produit/detail-produit/detail-produit';
import { ProduitEditPage } from './../pages/common-espace/produit/produit-edit/produit-edit';
import { ProduitListPage } from './../pages/common-espace/produit/produit-list/produit-list';
import { ProduitCreatePage } from '../pages/common-espace/produit/produit-create/produit-create';
//import {  } from '../block_md_int/tabs/tabs';

import { ProduitProvider } from './../providers/msmagasindomains/produit/produit';
import { HttpClientModule } from '@angular/common/http';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { MagasinProvider } from '../providers/msmagasindomains/magasin/magasin';
import { FournisseurProvider } from '../providers/msmagasindomains/fournisseur/fournisseur';
import { BoutiqueProvider } from '../providers/msmagasindomains//boutique/boutique';
//import { BonCommandeProvider } from '../providers/msmagasindomains/block_md_int/bon-de-commande/bon-de-commande';
import { CreateMagasinPage } from '../pages/common-espace/magasin/create-magasin/create-magasin';
import { EditMagasinPage } from '../pages/common-espace/magasin/edit-magasin/edit-magasin';
import { DetailMagasinPage } from '../pages/common-espace/magasin/detail-magasin/detail-magasin';
import { ListMagasinPage } from '../pages/common-espace/magasin/list-magasin/list-magasin';
import { CreateFournisseurPage } from '../pages/fournisseur_space/fournisseur/create-fournisseur/create-fournisseur';
import { EditFournisseurPage } from '../pages/fournisseur_space/fournisseur/edit-fournisseur/edit-fournisseur';
import { DetailFournisseurPage } from '../pages/fournisseur_space/fournisseur/detail-fournisseur/detail-fournisseur';
import { ListFournisseurPage } from '../pages/fournisseur_space/fournisseur/list-fournisseur/list-fournisseur';
import { CreateBoutiquePage } from '../pages/common-espace/boutique/create-boutique/create-boutique';
import { EditBoutiquePage } from '../pages/common-espace/boutique/edit-boutique/edit-boutique';
import { DetailBoutiquePage } from '../pages/common-espace/boutique/detail-boutique/detail-boutique';
import { ListBoutiquePage } from '../pages/common-espace/boutique/list-boutique/list-boutique';
import { IonicImageViewerModule } from 'ionic-img-viewer';

// import { CreatebonDeCommandePage } from '../pages/common-espace/block_md_int/bonDeCommande/createbon-de-commande/createbon-de-commande';
// import { EditbonDeCommandePage } from '../pages/common-espace/block_md_int/bonDeCommande/editbon-de-commande/editbon-de-commande';
// import { DetailbonDeCommandePage } from '../pages/common-espace/block_md_int/bonDeCommande/detailbon-de-commande/detailbon-de-commande';
// import { ListbonDeCommandePage } from '../pages/common-espace/block_md_int/bonDeCommande/listbon-de-commande/listbon-de-commande';
import { StarRatingModule } from 'ionic3-star-rating';
// Integration part MD end

//import { ItemDetailsPageLogin } from '../pages/item-details-login/item-details-login';
import { CalendarModule } from 'ionic3-calendar-en';

// 1
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'
import { HttpModule } from '@angular/http';
//
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/fournisseur_space/tabs/tabs';
//

@NgModule({
  declarations: [
    MyApp,
    AdministrateurHomePage,
    AnimateurHomePage,
    PlafondLigneDeCreditPage,
    PlafondLigneDeDepotsPage,
    RemboursementPretPage,
    GestionDuStockPage,
    GestionDesPaiementsPage,
    GestionPaiementIDPage,
    GestionLivraisonIDPage,
    GestionRemboursementIDPage,
    GestionDepotIDPage,
    GestionCreditIDPage,
    GestionMagasinIDPage,
    GestionDesCommandesLPage,
    GestionSuiviCommandePage,
    GestionSuiviLivraisonPage,
    GestionSuiviDemandesPage,
    GestionSuiviPretPage,
    GestionSuiviCreditPage,
    GestionSuiviDepotPage,
    GestionSuiviDevisPage,
    GestionSuiviEncheresPage,
    GestionSuiviNotationsPage,
    GestionSuiviProduitsPage,
    DetailCommandePage,
    DetailLivraisonPage,
    DetailDemandePage,
    DetailPretPage,
    DetailCreditPage,
    DetailDepotPage,
    DetailDevisPage,
    DetailEncherePage,
    DetailNotationPage,
    GestionListeLivraisonPage,
    AdministrateurSuiviPage,
    AdministrateurStatistiquesPage,
    AdminTabsControllerPage,
    AnimateurSuiviPage,
    AnimateurStatistiquesPage,
    AnimTabsControllerPage,
    FournisseurHomePage,
    FournisseurSuiviPage,
    FournisseurStatistiquesPage,
    FournisseurTabsControllerPage,
    ClientHomePage,
    ClientSuiviPage,
    ClientStatistiquesPage,
    ClientTabsControllerPage,
    BanqueHomePage,
    BanqueSuiviPage,
    BanqueStatistiquesPage,
    BanqueTabsControllerPage,
    MultiroleHomePage,
    SplashScreenPage,
    LoginPage,
    InscriptionPage,
    InscriptionOKPage,
    MotDePasseOubliPage,
    RecherchePage,
    FiltrerPage,
    TrierPage,
    CreerComptePage,
    ViewComptePage,
    CreerTypeActeurPage,
    CreerZonePage,
    CreerActivitPage,
    CreerDomainePage,
    CreerEncherePage,
    CreerOffrePage,
    CreerOperationPage,
    CreerRolePage,
    CreerBoutiquePage,
    CreerMagasinPage,
    CreerProduitPage,
    CreerServicePage,
    CreerCategoriePage,
    EditerComptePage,
    EditerZonePage,
    EditerTypeActeurPage,
    EditerActivitPage,
    EditerDomainePage,
    EditerEncherePage,
    EditerOffrePage,
    EditerOperationPage,
    EditerRolePage,
    EditerMagasinPage,
    EditerBoutiquePage,
    EditerProduitPage,
    EditerServicePage,
    EditerCategoriePage
    ,DetailUserPage
    ,HomeDomainePage,
    RatingPage,
    FournisseurPage,
    CommentairePage,
    EncheresPage,
    EncherePage,
    OffresPage,
    DevisPage,
    DevisOffrePage,
    EnvoiSuccesPage,
    EchecEnvoiPage,
    DomainePage,
    ActivitePage,
	ProduitCreatePage,
    ProduitListPage,
    ProduitEditPage,
    DetailProduitPage,
    CreateMagasinPage,
    EditMagasinPage,
    DetailMagasinPage,
    ListMagasinPage,
    CreateFournisseurPage,
    EditFournisseurPage,
    DetailFournisseurPage,
    ListFournisseurPage,
    CreateBoutiquePage,
    EditBoutiquePage,
    DetailBoutiquePage,
    ListBoutiquePage,
    DetailProduitByActivitePage,
    PanierPage,
    // CreatebonDeCommandePage,
    // EditbonDeCommandePage,
    // DetailbonDeCommandePage,
    // ListbonDeCommandePage,
    TabsPage
    //, ItemDetailsPageLogin
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule, AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    MenuPageModule,
    HttpClientModule,
    StarRatingModule,
    IonicImageViewerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdministrateurHomePage,
    AnimateurHomePage,
    PlafondLigneDeCreditPage,
    PlafondLigneDeDepotsPage,
    RemboursementPretPage,
    GestionDuStockPage,
    GestionDesPaiementsPage,
    GestionPaiementIDPage,
    GestionLivraisonIDPage,
    GestionRemboursementIDPage,
    GestionDepotIDPage,
    GestionCreditIDPage,
    GestionMagasinIDPage,
    GestionDesCommandesLPage,
    GestionSuiviCommandePage,
    GestionSuiviLivraisonPage,
    GestionSuiviDemandesPage,
    GestionSuiviPretPage,
    GestionSuiviCreditPage,
    GestionSuiviDepotPage,
    GestionSuiviDevisPage,
    GestionSuiviEncheresPage,
    GestionSuiviNotationsPage,
    GestionSuiviProduitsPage,
    DetailCommandePage,
    DetailLivraisonPage,
    DetailDemandePage,
    DetailPretPage,
    DetailCreditPage,
    DetailDepotPage,
    DetailDevisPage,
    DetailEncherePage,
    DetailNotationPage,
    GestionListeLivraisonPage,
    AdministrateurSuiviPage,
    AdministrateurStatistiquesPage,
    AdminTabsControllerPage,
    AnimateurSuiviPage,
    AnimateurStatistiquesPage,
    AnimTabsControllerPage,
    FournisseurHomePage,
    FournisseurSuiviPage,
    FournisseurStatistiquesPage,
    FournisseurTabsControllerPage,
    ClientHomePage,
    ClientSuiviPage,
    ClientStatistiquesPage,
    ClientTabsControllerPage,
    BanqueHomePage,
    BanqueSuiviPage,
    BanqueStatistiquesPage,
    BanqueTabsControllerPage,
    MultiroleHomePage,
    SplashScreenPage,
    LoginPage,
    InscriptionPage,
    InscriptionOKPage,
    MotDePasseOubliPage,
    RecherchePage,
    FiltrerPage,
    TrierPage,
    CreerComptePage,
    ViewComptePage,
    CreerTypeActeurPage,
    CreerZonePage,
    CreerActivitPage,
    CreerDomainePage,
    CreerEncherePage,
    CreerOffrePage,
    CreerOperationPage,
    CreerRolePage,
    CreerBoutiquePage,
    CreerMagasinPage,
    CreerProduitPage,
    CreerServicePage,
    CreerCategoriePage,
    EditerComptePage,
    EditerZonePage,
    EditerTypeActeurPage,
    EditerActivitPage,
    EditerDomainePage,
    EditerEncherePage,
    EditerOffrePage,
    EditerOperationPage,
    EditerRolePage,
    EditerMagasinPage,
    EditerBoutiquePage,
    EditerProduitPage,
    EditerServicePage,
    EditerCategoriePage
    ,DetailUserPage,
    HomeDomainePage,
    RatingPage,
    FournisseurPage,
    CommentairePage,
    EncheresPage,
    EncherePage,
    OffresPage,
    DevisPage,
    DevisOffrePage,
    EnvoiSuccesPage,
    EchecEnvoiPage,
    DomainePage,
    ActivitePage,
	ProduitCreatePage,
    ProduitListPage,
    ProduitEditPage,
    DetailProduitPage,
    CreateMagasinPage,
    EditMagasinPage,
    DetailMagasinPage,
    ListMagasinPage,
    CreateFournisseurPage,
    EditFournisseurPage,
    DetailFournisseurPage,
    ListFournisseurPage,
    CreateBoutiquePage,
    EditBoutiquePage,
    DetailBoutiquePage,
    ListBoutiquePage,
    DetailProduitByActivitePage,
    PanierPage,
    // CreatebonDeCommandePage,
    // EditbonDeCommandePage,
    // DetailbonDeCommandePage,
    // ListbonDeCommandePage,
    TabsPage
    //,ItemDetailsPageLogin
  ],
  providers: [
    StatusBar,
    ToastService, LoadingService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	ProduitProvider,
    MagasinProvider,
    FournisseurProvider,
    BoutiqueProvider,
  //  BonCommandeProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}