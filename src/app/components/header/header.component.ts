import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  persona: persona = new persona("","","","");
  constructor(public personaService: PersonaService, private router:Router, private authService:AuthService) {}
  
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(persona =>{
      this.persona = persona;
    } )
    
  }

  login(){
    this.router.navigate(['/login'])
  }

  logout(){
    this.authService.logOut();
    alert("cerro su sesion");
      
  }
  
  userlogOut=this.authService.logOut();
  
  
  userLogged=this.authService.getUserLogged();
}


