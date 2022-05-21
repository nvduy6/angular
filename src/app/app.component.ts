import { Component } from '@angular/core';
import mockData from './data';
import { Iproduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
productList :Iproduct[]=mockData;
onHandleAdd(product:any){
  console.log('product',product);
  this.productList.push(product)
}
}
