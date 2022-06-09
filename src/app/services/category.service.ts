import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPcate } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
API_url:string= "http://localhost:3000/categoryBlogs"

  constructor(private http:HttpClient) { }
  addCate(product: any): Observable<IPcate> {
    return this.http.post<IPcate>(this.API_url, product)
  }
  getCates(): Observable<IPcate[]> {
    return this.http.get<IPcate[]>(this.API_url);
  }
  getCate(id: string | number): Observable<IPcate> {
    return this.http.get<IPcate>(`${this.API_url}/${id}`)
  }
  removeCate(id: number): Observable<IPcate> {
    return this.http.delete<IPcate>(`${this.API_url}/${id}`)
  }
  updateCate(cate: IPcate): Observable<IPcate> {
    return this.http.put<IPcate>(`${this.API_url}/${cate.id}`, cate);
  }
}
