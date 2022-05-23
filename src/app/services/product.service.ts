import { Injectable } from '@angular/core';
import mockData from '../data';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
API_URL: string = 'http://localhost:3000/product'
  constructor(private http: HttpClient) { }
  getProduct(id:string|number):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.API_URL}/${id}`)
  }
  getProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.API_URL);
  }
  removeProduct(id:number):Observable<Iproduct>{
return this.http.delete<Iproduct>(`${this.API_URL}/${id}`)
  }
  addProduct(product: any):Observable<Iproduct>{
return this.http.post<Iproduct>(this.API_URL,product)
  }
  updateProduct(product:Iproduct):Observable<Iproduct>{
    return this.http.put<Iproduct>(`${this.API_URL}/${product.id}`,product);
  }
}
