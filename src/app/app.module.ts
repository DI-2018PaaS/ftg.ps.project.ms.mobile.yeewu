import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AdministrateurHomePage } from '../pages/admin_space/administrateur-home/administrateur-home';
import { PlafondLigneDeCreditPage } from '../pages/admin_space/plafond-ligne-de-credit/plafond-ligne-de-credit';
import { PlafondLigneDeDepotsPage } from '../pages/admin_space/plafond-ligne-de-depots/plafond-ligne-de-depots';
import { RemboursementPretPage } from '../pages/admin_space/remboursement-pret/remboursement-pret';
import { GestionDuStockPage } from '../pages/admin_space/gestion-du-stock/gestion-du-stock';
import { GestionDesPaiementsPage } from '../pages/admin_space/gestion-des-paiements/gestion-des-paiements';
import { GestionPaiementIDPage } from '../pages/admin_space/gestion-paiement-id/gestion-paiement-id';
import { GestionLivraisonIDPage } from '../pages/admin_space/gestion-livraison-id/gestion-livraison-id';
import { GestionRemboursementIDPage } from '../pages/admin_space/gestion-remboursement-id/gestion-remboursement-id';
import { GestionDepotIDPage } from '../pages/admin_space/gestion-depot-id/gestion-depot-id';
import { GestionCreditIDPage } from '../pages/admin_space/gestion-credit-id/gestion-credit-id';
import { GestionMagasinIDPage } from '../pages/admin_space/gestion-magasin-id/gestion-magasin-id';
import { GestionDesCommandesLPage } from '../pages/admin_space/gestion-des-commandes-l/gestion-des-commandes-l';
import { GestionSuiviCommandePage } from '../pages/admin_space/gestion-suivi-commande/gestion-suivi-commande';
import { GestionSuiviLivraisonPage } from '../pages/admin_space/gestion-suivi-livraison/gestion-suivi-livraison';
import { GestionSuiviDemandesPage } from '../pages/admin_space/gestion-suivi-demandes/gestion-suivi-demandes';
import { GestionSuiviPretPage } from '../pages/admin_space/gestion-suivi-pret/gestion-suivi-pret';
import { GestionSuiviCreditPage } from '../pages/admin_space/gestion-suivi-credit/gestion-suivi-credit';
import { GestionSuiviDepotPage } from '../pages/admin_space/gestion-suivi-depot/gestion-suivi-depot';
import { GestionSuiviDevisPage } from '../pages/admin_space/gestion-suivi-devis/gestion-suivi-devis';
import { GestionSuiviEncheresPage } from '../pages/admin_space/gestion-suivi-encheres/gestion-suivi-encheres';
import { GestionSuiviNotationsPage } from '../pages/admin_space/gestion-suivi-notations/gestion-suivi-notations';
import { GestionSuiviProduitsPage } from '../pages/admin_space/gestion-suivi-produits/gestion-suivi-produits';
import { DetailCommandePage } from '../pages/admin_space/detail-commande/detail-commande';
import { DetailLivraisonPage } from '../pages/admin_space/detail-livraison/detail-livraison';
import { DetailDemandePage } from '../pages/admin_space/detail-demande/detail-demande';
import { DetailPretPage } from '../pages/admin_space/detail-pret/detail-pret';
import { DetailCreditPage } from '../pages/admin_space/detail-credit/detail-credit';
import { DetailDepotPage } from '../pages/admin_space/detail-depot/detail-depot';
import { DetailDevisPage } from '../pages/admin_space/detail-devis/detail-devis';
import { DetailEncherePage } from '../pages/admin_space/detail-enchere/detail-enchere';
import { DetailNotationPage } from '../pages/admin_space/detail-notation/detail-notation';
import { GestionListeLivraisonPage } from '../pages/admin_space/gestion-liste-livraison/gestion-liste-livraison';
import { AdministrateurSuiviPage } from '../pages/admin_space/administrateur-suivi/administrateur-suivi';
import { AdministrateurStatistiquesPage } from '../pages/admin_space/administrateur-statistiques/administrateur-statistiques';
import { AdminTabsControllerPage } from '../pages/admin_space/admin-tabs-controller/admin-tabs-controller';
import { SplashScreenPage } from '../pages/common/splash-screen/splash-screen';
import { LoginPage } from '../pages/common/login/login';
import { InscriptionPage } from '../pages/common/inscription/inscription';
import { InscriptionOKPage } from '../pages/common/inscription-ok/inscription-ok';
import { MotDePasseOubliPage } from '../pages/common/mot-de-passe-oubli/mot-de-passe-oubli';
import { RecherchePage } from '../pages/common/recherche/recherche';
import { FiltrerPage } from '../pages/common/filtrer/filtrer';
import { TrierPage } from '../pages/common/trier/trier';
import { CreerComptePage } from '../pages/crud/creer-compte/creer-compte';
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
//import { ItemDetailsPageLogin } from '../pages/item-details-login/item-details-login';

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
//

@NgModule({
  declarations: [
    MyApp,
    AdministrateurHomePage,
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
    SplashScreenPage,
    LoginPage,
    InscriptionPage,
    InscriptionOKPage,
    MotDePasseOubliPage,
    RecherchePage,
    FiltrerPage,
    TrierPage,
    CreerComptePage,
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
    //, ItemDetailsPageLogin
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule, AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdministrateurHomePage,
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
    SplashScreenPage,
    LoginPage,
    InscriptionPage,
    InscriptionOKPage,
    MotDePasseOubliPage,
    RecherchePage,
    FiltrerPage,
    TrierPage,
    CreerComptePage,
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
    //,ItemDetailsPageLogin
  ],
  providers: [
    StatusBar,
    ToastService, LoadingService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}