import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpCateProject } from '../models/categoryProjects';

@Injectable({
  providedIn: 'root'
})
export class CategoriesProjectService {

  API_url:string= "http://localhost:3000/categoriesProjects"

  constructor(private http:HttpClient) { }
  addCatePro(cateProject: any): Observable<IpCateProject> {
    return this.http.post<IpCateProject>(this.API_url,cateProject)
  }
  getCatesPro(): Observable<IpCateProject[]> {
    return this.http.get<IpCateProject[]>(this.API_url);
  }
  getCatePro(id: string | number): Observable<IpCateProject> {
    return this.http.get<IpCateProject>(`${this.API_url}/${id}`)
  }
  removeCatePro(id: number): Observable<IpCateProject> {
    return this.http.delete<IpCateProject>(`${this.API_url}/${id}`)
  }
  updateCatePro(cateProject: IpCateProject): Observable<IpCateProject> {
    return this.http.put<IpCateProject>(`${this.API_url}/${cateProject.id}`, cateProject);
  }
}
