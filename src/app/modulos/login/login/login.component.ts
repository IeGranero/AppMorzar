import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/loging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    
  }

  login(form:NgForm){
    const email=form.value.email
    const password=form.value.password

    this.loginService.login(email,password);
  }
}
