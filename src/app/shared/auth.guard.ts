import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    //return true;
    return this.authService.isAdmin()
    .then(authentifie => {
      if(authentifie) {
        console.log("Navigation autorisée, vous êtes bien un admin loggué")
        return true;
      } else {
        console.log("Navigation NON AUTORISEE, retour à la page d'accueil !")

        // mais avant de retourner faux on va naviguer vers la page d'accueil
        this.router.navigate(["/home"]);
        return false;
      }

    })
  }

}
