import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_url:string= "http://localhost:3000/posts"

  constructor(private http:HttpClient) { }
  addCate(product: any): Observable<IpPost> {
    return this.http.post<IpPost>(this.API_url, product)
  }
  getCates(): Observable<IpPost[]> {
    return this.http.get<IpPost[]>(this.API_url);
  }
  getCate(id: string | number): Observable<IpPost> {
    return this.http.get<IpPost>(`${this.API_url}/${id}`)
  }
  removeCate(id: number): Observable<IpPost> {
    return this.http.delete<IpPost>(`${this.API_url}/${id}`)
  }
  updateCate(cate: IpPost): Observable<IpPost> {
    return this.http.put<IpPost>(`${this.API_url}/${cate.id}`, cate);
  }
}
