import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_url:string= "http://localhost:3000/blogs"

  constructor(private http:HttpClient) { }
  addPost(product: any): Observable<IpPost> {
    return this.http.post<IpPost>(this.API_url, product)
  }
  getPosts(): Observable<IpPost[]> {
    return this.http.get<IpPost[]>(`${this.API_url}?_expand=categoryBlog`);
  }
  getPostsLimit(): Observable<IpPost[]> {
    return this.http.get<IpPost[]>(`${this.API_url}?_limit=2`);
  }
  
  getPost(id: string | number): Observable<IpPost> {
    return this.http.get<IpPost>(`${this.API_url}/${id}?_expand=categoryBlog`)
  }
  removePost(id: number): Observable<IpPost> {
    return this.http.delete<IpPost>(`${this.API_url}/${id}`)
  }
  updatePost(cate: IpPost): Observable<IpPost> {
    return this.http.put<IpPost>(`${this.API_url}/${cate.id}`, cate);
  }
}
