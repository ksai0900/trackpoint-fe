import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log("user " + localStorage.getItem('user'))
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData || '{}');
    if (user.category === "doctor") {
      return true;
    } 
    if (user.category === "secretary") {
      return true;
    } 


    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;


  }
}