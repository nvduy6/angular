import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpUser } from '../models/authen';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
API_url:string ='http://localhost:3000/users'
  constructor(private http: HttpClient) { }
  addUser(user:any):Observable<IpUser>{
    return this.http.post<IpUser>(this.API_url,user)
  }
}
