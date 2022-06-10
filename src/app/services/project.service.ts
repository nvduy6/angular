import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpProject } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
API_URL:string="http//localhost:3000/projects";
  constructor(private http:HttpClient) { }
  getProject(id:string|number):Observable<IpProject>{
    return this.http.get<IpProject>(`${this.API_URL}/${id}`)
  }
  getProjects():Observable<IpProject[]>{
    return this.http.get<IpProject[]>(this.API_URL);
  }
  removeProject(id:number):Observable<IpProject>{
return this.http.delete<IpProject>(`${this.API_URL}/${id}`)
  }
  addProject(project: any):Observable<IpProject>{
return this.http.post<IpProject>(this.API_URL,project)
  }
  updateProject(project:IpProject):Observable<IpProject>{
    return this.http.put<IpProject>(`${this.API_URL}/${project.id}`,project);
  }
}
