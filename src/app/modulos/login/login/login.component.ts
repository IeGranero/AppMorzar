import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';
import { LoginService } from 'src/app/servicios/loging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email: string;
  password: string;

  constructor(private loginService:LoginService, public datosService:DatosService){

  }
  ngOnInit(): void {


      }

  login(form:NgForm){
    const email=form.value.email
    const password=form.value.password

    this.loginService.login(email,password);
   

  }
  login1() {
    console.log(this.email);
    console.log(this.password);
  }

}
