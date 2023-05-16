import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar){}
  
  Ingresar(){
    const {email, password}=this.usuario;
    this.authService.login(email,password).then(res=>{
      console.log("se registro ",res);
    })
    this.router.navigateByUrl('/#inicio');
    this.mostrarMensaje('Inicio de sesión exitoso');
  }

  mostrarMensaje(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000, // Duración del mensaje en milisegundos
    });
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
