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

/*
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
*/

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
import { DetailProduitByActivitePage } from './../pages/front_office/detail-produit-by-activite/detail-produit-by-activite';
import { MenuPageModule } from './../pages/fournisseur_space/menu/menu.module';

import { DetailProduitPage } from './../pages/crud/produit/detail-produit/detail-produit';
import { ProduitEditPage } from './../pages/crud/produit/produit-edit/produit-edit';
import { ProduitListPage } from './../pages/crud/produit/produit-list/produit-list';
import { ProduitCreatePage } from '../pages/crud/produit/produit-create/produit-create';

import { DetailServicePage } from './../pages/crud/service/detail-service/detail-service';
import { ServiceEditPage } from './../pages/crud/service/service-edit/service-edit';
import { ServiceListPage } from './../pages/crud/service/service-list/service-list';
import { ServiceCreatePage } from '../pages/crud/service/service-create/service-create';
//import {  } from '../tabs/tabs';

import { ProduitProvider } from './../providers/msmagasindomains/produit/produit.provider';
import { HttpClientModule } from '@angular/common/http';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { MagasinProvider } from '../providers/msmagasindomains/magasin/magasin.provider';
import { BoutiqueProvider } from '../providers/msmagasindomains/boutique/boutique.provider';
import { BonCommandeProvider } from '../providers/msmagasindomains/bon-de-commande/bon-de-commande.provider';
import { CreateMagasinPage } from '../pages/crud/magasin/create-magasin/create-magasin';
import { EditMagasinPage } from '../pages/crud/magasin/edit-magasin/edit-magasin';
import { DetailMagasinPage } from '../pages/crud/magasin/detail-magasin/detail-magasin';
import { ListMagasinPage } from '../pages/crud/magasin/list-magasin/list-magasin';
import { CreateFournisseurPage } from '../pages/fournisseur_space/fournisseur/create-fournisseur/create-fournisseur';
import { EditFournisseurPage } from '../pages/fournisseur_space/fournisseur/edit-fournisseur/edit-fournisseur';
import { DetailFournisseurPage } from '../pages/fournisseur_space/fournisseur/detail-fournisseur/detail-fournisseur';
import { ListFournisseurPage } from '../pages/fournisseur_space/fournisseur/list-fournisseur/list-fournisseur';
import { CreateBoutiquePage } from '../pages/crud/boutique/create-boutique/create-boutique';
import { EditBoutiquePage } from '../pages/crud/boutique/edit-boutique/edit-boutique';
import { DetailBoutiquePage } from '../pages/crud/boutique/detail-boutique/detail-boutique';
import { ListBoutiquePage } from '../pages/crud/boutique/list-boutique/list-boutique';
import { CreatebonDeCommandePage } from '../pages/common-espace/bonDeCommande/createbon-de-commande/createbon-de-commande';
import { EditbonDeCommandePage } from '../pages/common-espace/bonDeCommande/editbon-de-commande/editbon-de-commande';
import { DetailbonDeCommandePage } from '../pages/common-espace/bonDeCommande/detailbon-de-commande/detailbon-de-commande';
import { ListbonDeCommandePage } from '../pages/common-espace/bonDeCommande/listbon-de-commande/listbon-de-commande';
// Integration part MD end

// Template 3
//import { CartPage } from '../pages/common-espace/cart/cart';
//import { KeysPipe } from '../pipes/pipe';
//import { ProductService } from '../../../../providers/service/product-service';
// Template 3 End
//import { ItemDetailsPageLogin } from '../pages/item-details-login/item-details-login';
import { CalendarModule } from 'ionic3-calendar-en';
import { IonicRatingModule } from 'ionic-rating';
// 1
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'
import { HttpModule } from '@angular/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';
//
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/fournisseur_space/tabs/tabs';
//import { ProductService } from '../providers/service/product-service';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { HTTP } from '@ionic-native/http';
import { DetailCommentairePage } from '../pages/common-espace/detail-commentaires/detail-commentaires';
import { ChartsComponent } from '../pages/common-espace/charts/charts-component/charts.component';
import { DevisProduitDetailPage } from '../pages/common-espace/devis-produit-detail/devis-produit-detail';
import { Values } from '../providers/common/values';
import { CategorieEditPage } from '../pages/crud/categorie/categorie-edit/categorie-edit';
//import { ServiceEditPage } from '../pages/crud/service/service-edit/service-edit';
import { RoleEditPage } from '../pages/crud/role/role-edit/role-edit';
import { OperationEditPage } from '../pages/crud/operation/operation-edit/operation-edit';
import { OffreEditPage } from '../pages/crud/offre/offre-edit/offre-edit';
import { EnchereEditPage } from '../pages/crud/enchere/enchere-edit/enchere-edit';
import { DomaineEditPage } from '../pages/crud/domaine/domaine-edit/domaine-edit';
import { ActiviteEditPage } from '../pages/crud/activite/activite-edit/activite-edit';
import { TypeActeurEditPage } from '../pages/crud/type-acteur/type-acteur-edit/type-acteur-edit';
import { ZoneEditPage } from '../pages/crud/zone/zone-edit/zone-edit';
import { CompteEditPage } from '../pages/crud/compte/compte-edit/compte-edit';
import { CategorieCreatePage } from '../pages/crud/categorie/categorie-create/categorie-create';
import { RoleCreatePage } from '../pages/crud/role/role-create/role-create';
import { OperationCreatePage } from '../pages/crud/operation/operation-create/operation-create';
import { OffreCreatePage } from '../pages/crud/offre/offre-create/offre-create';
import { EnchereCreatePage } from '../pages/crud/enchere/enchere-create/enchere-create';
import { DomaineCreatePage } from '../pages/crud/domaine/domaine-create/domaine-create';
import { ActiviteCreatePage } from '../pages/crud/activite/activite-create/activite-create';
import { ZoneCreatePage } from '../pages/crud/zone/zone-create/zone-create';
import { TypeActeurCreatePage } from '../pages/crud/type-acteur/type-acteur-create/type-acteur-create';
import { DetailComptePage } from '../pages/crud/compte/detail-compte/detail-compte';
import { CompteCreatePage } from '../pages/crud/compte/compte-create/compte-create';
import { FournisseurProvider } from '../providers/acteur/fournisseur/fournisseur.provider';
import { ServiceProvider } from '../providers/msmagasindomains/service/service.provider';
import { OffreListPage } from '../pages/crud/offre/offre-list/offre-list';
import { OffreProvider } from '../providers/msencheresoffres/offre/offre.provider';
import { CartService } from '../providers/common/cart.service';
import { AuthService } from '../providers/common/auth.service';
import { SharedService } from '../providers/common/shared.service';
import { PanierPage } from '../pages/common/panier/panier';
import { StarRatingModule } from 'ionic3-star-rating';
import { PaiementPage } from '../pages/common/paiement/paiement';
//import { PopoverPage } from '../pages/common/about-popover/about-popover';
//import { Config } from '../providers/service/config';
//

@NgModule({
  declarations: [
    MyApp,
    //PopoverPage,
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
    CompteCreatePage,
    DetailComptePage,
    TypeActeurCreatePage,
    ZoneCreatePage,
    ActiviteCreatePage,
    DomaineCreatePage,
    EnchereCreatePage,
    OffreCreatePage,
    OperationCreatePage,
    RoleCreatePage,
    CreateBoutiquePage,
    CreateMagasinPage,
    ProduitCreatePage,
    ServiceCreatePage,
    CategorieCreatePage,
    CompteEditPage,
    ZoneEditPage,
    TypeActeurEditPage,
    ActiviteEditPage,
    DomaineEditPage,
    EnchereEditPage,
    OffreEditPage,
    OperationEditPage,
    RoleEditPage,
    EditMagasinPage,
    EditBoutiquePage,
    ProduitEditPage,
    ServiceEditPage,
    CategorieEditPage
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
	ProduitListPage,
    ServiceListPage,
    ProduitEditPage,
    DetailProduitPage,
	DetailServicePage,
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
    CreatebonDeCommandePage,
    EditbonDeCommandePage,
    DetailbonDeCommandePage,
    ListbonDeCommandePage,
    TabsPage,
    DetailCommentairePage,
    ChartsComponent,
    DevisProduitDetailPage,
    DetailProduitByActivitePage,
    OffreListPage,
    PanierPage,
    PaiementPage
     // CreatebonDeCommandePage,
    // EditbonDeCommandePage,
    // DetailbonDeCommandePage,
    // ListbonDeCommandePage,
    //,CartPage,
    //KeysPipe
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
    IonicImageViewerModule,
    HttpClientModule,
    IonicRatingModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //PopoverPage,
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
    CompteCreatePage,
    DetailComptePage,
    TypeActeurCreatePage,
    ZoneCreatePage,
    ActiviteCreatePage,
    DomaineCreatePage,
    EnchereCreatePage,
    OffreCreatePage,
    OperationCreatePage,
    RoleCreatePage,
    CreateBoutiquePage,
    CreateMagasinPage,
    ProduitCreatePage,
    ServiceCreatePage,
    CategorieCreatePage,
    CompteEditPage,
    ZoneEditPage,
    TypeActeurEditPage,
    ActiviteEditPage,
    DomaineEditPage,
    EnchereEditPage,
    OffreEditPage,
    OperationEditPage,
    RoleEditPage,
    EditMagasinPage,
    EditBoutiquePage,
    ProduitEditPage,
    ServiceEditPage,
    CategorieEditPage
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
	ProduitListPage,
    ServiceListPage,
    ProduitEditPage,
    DetailProduitPage,
	DetailServicePage,
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
    CreatebonDeCommandePage,
    EditbonDeCommandePage,
    DetailbonDeCommandePage,
    ListbonDeCommandePage,
    TabsPage,
    DetailCommentairePage,
    DetailCommentairePage,
    ChartsComponent,
    DevisProduitDetailPage,
    DetailProduitByActivitePage,
    OffreListPage,
    PanierPage,
    PaiementPage
     // CreatebonDeCommandePage,
    // EditbonDeCommandePage,
    // DetailbonDeCommandePage,
    // ListbonDeCommandePage,
    //,CartPage
    //,ItemDetailsPageLogin
  ],
  providers: [
    HTTP,
    StatusBar,
    ToastService, LoadingService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProduitProvider,
    ServiceProvider,
    MagasinProvider,
    FournisseurProvider,
    BoutiqueProvider,
    BonCommandeProvider,
    //ProductService,
    PhotoViewer,
    Values,
    OffreProvider,
    CartService,
    AuthService,
    SharedService
    //,Config
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}