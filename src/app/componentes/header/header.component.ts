import { Component } from '@angular/core';
import { LoginService } from 'src/app/servicios/loging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public login:LoginService) { }

  itsLogIn(){
    return this.login.itsLogIn();
   }

   logOut(){
    return this.login.logout();
   }
}
