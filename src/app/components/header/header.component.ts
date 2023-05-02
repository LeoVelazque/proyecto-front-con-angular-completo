import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  persona: persona = new persona("","","");
    
  constructor(public personaService: PersonaService, private router:Router) {}
  
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona = data})
  }

  login(){
    this.router.navigate(['/login'])
  }
}


