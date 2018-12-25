import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate, CanLoad{
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLoggedIn(state.url);
    }
    constructor(private authService: AuthService,
                private router: Router) {
        
    }

    canLoad(route: Route): boolean {
        return this.checkLoggedIn(route.path);
    }

    checkLoggedIn(url: string): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}