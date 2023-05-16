import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //Exp: Experiencia = new Experiencia("","","","","","");
  Exp: Experiencia[] = []
  constructor(public experienciaService:ExperienciaService, private authService:AuthService, private httpClient: HttpClient) {}
  

  ngOnInit(): void{
    this.cargarExperiencia();
    console.log(Experiencia);
  }

  cargarExperiencia(): void{
    this.experienciaService.lista().subscribe(data => {
      this.Exp = data;
    })
  }

  userLogged=this.authService.getUserLogged();
}
