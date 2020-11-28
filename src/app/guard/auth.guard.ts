import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {

    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this._isUsuarioLogado()) {

            console.log('AuthGuard', 'Usuário logado...')

            return true

        } else {

            console.log('AuthGuard', 'Usuário não autenticado...')

            this.router.navigate(['/login'])

            return false

        }

    }

    private _isUsuarioLogado(): boolean {

        return localStorage.getItem('usuario') != undefined

    }

}
