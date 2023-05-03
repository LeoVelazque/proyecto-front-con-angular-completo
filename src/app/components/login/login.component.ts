import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario={
    email: '',
    password: ''
  }

  constructor(private authService: AuthService){}
  
  Ingresar(){
    const {email, password}=this.usuario;
    this.authService.login(email,password).then(res=>{
      console.log("se registro ",res);
    })
  }
  
  obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    });
  }
  
  logout(){
    this.authService.logOut();
  }
  
}  
