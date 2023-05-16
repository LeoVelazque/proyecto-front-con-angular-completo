import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { Data } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
 
@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/personas';
  
  constructor(private httpClient: HttpClient) {}

  //public getPersona(): Observable<persona>{
    //return this.http.get<persona>(this.URL + '/traer');
  //}

  //getPersona() {
    //this.http.get(this.URL + '/traer').subscribe((data) => {
      //console.log(data);
    //});
//}
  
  public getPersona(): Observable<any>{
    return this.httpClient.get(this.URL + '/traer/perfil');
    console.log(persona)
  };

  //public postPersona(persona:any): Observable<any>{
    //return this.http.post(this.URL + '/crear', persona);
  //}

  //public deletePersona(id):Observable<any>{
    //return this.http.delete(this.URL + '/borrar/' + id)
  //}

  //createUser(persona: Any): Observable<any>{
    //return this.http.post('https://reqres.in/api/users', persona);
  //}
  public editUser(persona: persona): Observable<any>{
    return this.httpClient.post(this.URL + '/crear', persona);
  }

}
