import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpUser } from '../models/authen';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
API_url:string ='http://localhost:3000/infor'
  constructor(private http: HttpClient) { }
 
  addUser(product: any): Observable<IpUser> {
    return this.http.post<IpUser>(this.API_url, product)
  }
  getUsers(): Observable<IpUser[]> {
    return this.http.get<IpUser[]>(this.API_url);
  }
  getUser(id: string | number): Observable<IpUser> {
    return this.http.get<IpUser>(`${this.API_url}/${id}`)
  }
  removeUser(id: number): Observable<IpUser> {
    return this.http.delete<IpUser>(`${this.API_url}/${id}`)
  }
  updateUser(product: IpUser): Observable<IpUser> {
    return this.http.put<IpUser>(`${this.API_url}/${product.id}`, product);
  }
}
