import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  Explab : Experiencia = null;

  constructor(private experienciaService: ExperienciaService,private activateRouter: ActivatedRoute,private router:Router){}
  
  ngOnInit(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(data=>{
      this.Explab=data;
    })
  }

  onUpdate(){
    const id = this.activateRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.Explab).subscribe(data=>{
      this.router.navigate(['']);
    },err =>{
      alert("experiencia añadida");
      this.router.navigate(['']);
    }
    )
  }
}
