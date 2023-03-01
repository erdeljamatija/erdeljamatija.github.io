import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { SupabaseService } from '../services/supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: SupabaseService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (!this.authService.isAuthenticated) {
    //   return this.router.parseUrl('/login');
    // } else {
    //   this.authService.subscribeToNotifications();
    //   return true;
    // }
    return true;
  }
}
