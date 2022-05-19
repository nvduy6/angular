import { Injectable } from '@angular/core';
import mockData from '../data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
API_URL: string = 'http://localhost:3000/product'
  constructor(private http: HttpClient) { }
  getProduct(id:number){
    return this.http.get(`${this.API_URL}/${id}`)
  }
  getProducts(){
    return this.http.get(this.API_URL);
  }
  removeProduct(){

  }
  addProduct(product: any){
mockData.push(product);
  }
  updateProduct(){}
}
