import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";




@Injectable()
export class LoginService{
    token:string;
  
    constructor(private router:Router, private cookies:CookieService ){}
    

    // token="eyJhbGciOiJSUzI1NiIsImtpZCI6ImI2NzE1ZTJmZjcxZDIyMjQ5ODk1MDAyMzY2ODMwNDc3Mjg2Nzg0ZTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXBwbW9yemFyLTkwYzJhIiwiYXVkIjoiYXBwbW9yemFyLTkwYzJhIiwiYXV0aF90aW1lIjoxNjgzNDA5MjkwLCJ1c2VyX2lkIjoiVkh3T0xHNzR6amVnZFFnUXl1SnZRVE14eGJ1MSIsInN1YiI6IlZId09MRzc0emplZ2RRZ1F5dUp2UVRNeHhidTEiLCJpYXQiOjE2ODM0MDkyOTAsImV4cCI6MTY4MzQxMjg5MCwiZW1haWwiOiJpZW5ncmFuZXJvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJpZW5ncmFuZXJvQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.r9p5k7K0cN9IDa6rh4mJSpr5qFNpFu3opdGA2Hf32km6wDno0x8KUH5U3ZtRrxu7yKzD-qSK52gJKR9Hc0KiSGApl0ZHMoFBWbBxqwmHsc_fkgcRVbWLolr6310cZ0rsGvS0BjnUQ8vFwItJV8-VGapYt2jmjW8-garvQcqxJ9VMFBnGykZc0Ra3YVptiORPzxRmi7RYiMs2erlXVQdYthwBeSDwoXSS71EPR7vpt0_Cib1YG6AW0mCBkglgOc_58G68HCLshOvoIym-6kZJVZDeEc6G0RO4JPmymGKWc1noyXIYfmsPGeBJudJ4gAi3DsZ3Yc8ioOyfSQwTQyI-Zg";
    
    login(email:string, password:string){
        
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            response=>{
                firebase.auth().currentUser?.getIdToken().then(

                    token=>{
                        this.router.navigate(['/home']);
                        sessionStorage.setItem("token", token);
                        
                        return token
                       
                        
                    }
                )
            }
        ); 
    }
    //   getIdToken(){
    //      return this.cookies.get("token");
    //         // return this.token;
    //      return this.token="eyJhbGciOiJSUzI1NiIsImtpZCI6ImI2NzE1ZTJmZjcxZDIyMjQ5ODk1MDAyMzY2ODMwNDc3Mjg2Nzg0ZTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXBwbW9yemFyLTkwYzJhIiwiYXVkIjoiYXBwbW9yemFyLTkwYzJhIiwiYXV0aF90aW1lIjoxNjgzNDA5MjkwLCJ1c2VyX2lkIjoiVkh3T0xHNzR6amVnZFFnUXl1SnZRVE14eGJ1MSIsInN1YiI6IlZId09MRzc0emplZ2RRZ1F5dUp2UVRNeHhidTEiLCJpYXQiOjE2ODM0MDkyOTAsImV4cCI6MTY4MzQxMjg5MCwiZW1haWwiOiJpZW5ncmFuZXJvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJpZW5ncmFuZXJvQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.r9p5k7K0cN9IDa6rh4mJSpr5qFNpFu3opdGA2Hf32km6wDno0x8KUH5U3ZtRrxu7yKzD-qSK52gJKR9Hc0KiSGApl0ZHMoFBWbBxqwmHsc_fkgcRVbWLolr6310cZ0rsGvS0BjnUQ8vFwItJV8-VGapYt2jmjW8-garvQcqxJ9VMFBnGykZc0Ra3YVptiORPzxRmi7RYiMs2erlXVQdYthwBeSDwoXSS71EPR7vpt0_Cib1YG6AW0mCBkglgOc_58G68HCLshOvoIym-6kZJVZDeEc6G0RO4JPmymGKWc1noyXIYfmsPGeBJudJ4gAi3DsZ3Yc8ioOyfSQwTQyI-Zg";
        
    //  }
     getIdToken(){
    	let data = sessionStorage.getItem("token");
        return data;
     }
    itsLogIn(){
        let data = sessionStorage.getItem("token");
        return data;
        
        //  return  sessionStorage.getItem("token");
    }
    logout(){
            firebase.auth().signOut().then(()=>{
               
                sessionStorage.removeItem('token');
                
                  window.location.reload();
                 this.router.navigate(['/login'])
                
               alert("Se ha deslogueado, por favor haga log in de")
                
            })
    }
}