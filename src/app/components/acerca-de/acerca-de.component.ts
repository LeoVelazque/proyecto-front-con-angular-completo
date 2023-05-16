import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","");
  constructor(public personaService: PersonaService, private authService:AuthService, private http: HttpClient) {}

  ngOnInit(): void{
    this.personaService.getPersona().subscribe(persona =>{
      this.persona = persona;
    } )
    
  }

  guardarPersona(){
    this.personaService.editUser(this.persona).subscribe(persona =>{
      this.persona =  persona
    } )
  }
  
  userLogged=this.authService.getUserLogged();
  

}