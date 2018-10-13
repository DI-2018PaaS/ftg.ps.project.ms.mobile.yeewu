import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

import { MotDePasse } from './../../models/user/mot-de-passe/mot-de-passe.model';
import { Utilisateur } from './../../models/user/utilisateur/utilisateur.model';
import { UtilisateurMotDePasse } from './../../models/user/utilisateur-pass/utilisateur-pass.model';


@Injectable()
export class LoginProvider 
  {
  private dbPath_user = 'users';
  private dbPath_pwd = 'passwords';
  private dbPath_user_pwd = 'user-passwords';


  refUserRef: AngularFireList<Utilisateur> = null;
  refPasswordRef: AngularFireList<MotDePasse> = null;
  refUserPasswordRef: AngularFireList<UtilisateurMotDePasse> = null;

  data = [{
    containerBodyImage: 'assets/img/login_register.jpg',
    logo : "assets/img/logo_yeewu.png",
    username: 'Username',
    password: 'Password',
    skip: 'Skip',
    register: 'Register',
    login: 'Login',
    iconAccount: 'assets/img/icons8-user-16.png',
    iconLock: 'assets/img/icons8-lock-16.png',
    facebook: 'Facebook',
    twitter: 'Twitter',
    google: 'Google',
    pinterest: 'Pinterest',
    signInWith: 'Or sign in with:'
  }];

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ActiviteProvider Provider');
    this.refUserRef = this.db.list(this.dbPath_user);
    this.refPasswordRef = this.db.list(this.dbPath_pwd);
    this.refUserPasswordRef = this.db.list(this.dbPath_user_pwd);
  }
}
