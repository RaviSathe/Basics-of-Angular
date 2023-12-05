import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http:HttpClient) { }

  loginPage = new BehaviorSubject(true)

  apiUrl = 'http://localhost:3000/registeredUser'

  public registration(userData:any){
    return this.http.post(this.apiUrl,userData)
  }

  public loginUser(data:any){
    return this.http.get(`http://localhost:3000/registeredUser?email=${data.email}&password=${data.password}`)
  }


}
