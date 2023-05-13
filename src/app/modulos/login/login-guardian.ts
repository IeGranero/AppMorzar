import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/servicios/loging.service";

@Injectable()
export class LoginGuardian implements CanActivate{

constructor(private loginService:LoginService,private router:Router){}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    if(this.loginService.itsLogIn()){
        return true;

}else{

}
    alert("No has iniciado sesion, redirigiendo a Log In")
    this.router.navigate(['login']);
    return false;
}
}