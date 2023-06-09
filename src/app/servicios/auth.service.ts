import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async login(email:string, password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email, password);
    }catch (err){
      console.log("error en login ", err);
      return null;
    }
  }

  async register(email:string, password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    }catch (err){
      console.log("error al crear perfil ", err);
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logOut(){
    this.afauth.signOut();
  }
}
