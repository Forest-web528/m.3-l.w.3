import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const confirmAccess = window.confirm('Вы уверены, что хотите зайти на эту страницу?');
    if (!confirmAccess) {
      this.router.navigate(['/home']); // Перенаправление на главную
    }
    return confirmAccess;
  }
}
