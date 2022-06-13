import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpConcat } from '../models/concat';

@Injectable({
  providedIn: 'root'
})
export class ConcatService {
API_URL:string="http://localhost:3000/concats";
  constructor(private http:HttpClient) { }
  addConcat(concat:any):Observable<IpConcat>{
    return this.http.post<IpConcat>(this.API_URL,concat)
  }
  listConcat():Observable<IpConcat[]>{
    return this.http.get<IpConcat[]>(this.API_URL)
  }
  removeConcat(id:number|string):Observable<IpConcat>{
    return this.http.delete<IpConcat>(`${this.API_URL}/${id}`)
  }
}
