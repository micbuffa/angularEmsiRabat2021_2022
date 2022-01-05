import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean=false;

  constructor() { }

  logIn() {
    // si on doit faire ça "pour de vrai", il faudrait passer en paramètres
    // le login et le password, puis faire un appel à une base de données
    // ou à un service distant d'authentification, et si tout est ok, alors
    // on connecte la personne

    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const isAdmin = new Promise((resolve, reject) => {
      // normalement ici on devrait vérifier que le login est bien admin
      // etc..... pour le moment on a une version très simplifiée...
      resolve(this.loggedIn)
    });

    return isAdmin;
  }
}
