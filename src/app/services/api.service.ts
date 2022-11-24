import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  // api call to login

  login(acno:any,pswd:any){

    const body = {
      acno,
      pswd
    }
    
    return this.http.post('',body)

  }
}
