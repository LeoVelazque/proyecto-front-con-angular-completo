import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia.model';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombre_de_empresa: string = '';
  nombre_del_puesto: string = '';
  fecha_inicio: string = '';
  fecha_fin: string = '';
  img_empresa: string = '';
  descripcion_empresa: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router){}
  
  ngOnInit(): void {
  }

  onCreate(): void{
    const Exp = new Experiencia(this.nombre_de_empresa, this.nombre_del_puesto, this.fecha_inicio, this.fecha_fin, this.img_empresa, this.descripcion_empresa);
    this.experienciaService.save(Exp).subscribe(data=>{
      alert("experiencia añadida");
      this.router.navigate(['']);
    },err =>{
      alert("experiencia añadida");
      this.router.navigate(['']);
    }
    )
  }

}
