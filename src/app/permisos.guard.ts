import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class PermisosGuard {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (new Date().getMinutes() % 2 != 0) {
      Swal.fire({
        title: 'No tienes permisos',
        imageUrl: 'https://media.giphy.com/media/3oKIPD4zpQPe4OMCyc/giphy.gif',
        imageWidth: 350,
        imageHeight: 250,
        backdrop: 'rgba(0,0,255,0.4)'
      })
      return false;
    } else {
      return true;
    }
  }
}
