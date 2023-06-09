import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  expURL = 'http://localhost:8080/experiencias';
  
  constructor(private httpClient: HttpClient) {}

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + '/traer');
  }
  
  public detail(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `/traer/${id}`)
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/crear',experiencia);
  }

  public update(id:number,experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/editar/:id`, experiencia); 
  }

  //public update(experiencia: Experiencia): Observable<any>{
    //return this.httpClient.post(this.expURL + '/crear', experiencia);
  //}

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/borrar/${id}`)
  }

}