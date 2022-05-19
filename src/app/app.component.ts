import { Component } from '@angular/core';
import mockData from './data';
import { Iproduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // productList: Iproduct[] = [
  //   {
  //     id: 1,
  //     name: "product A",
  //     price: 200,
  //     status: false
  //   },
  //   {
  //     id: 2,
  //     name: "product B",
  //     price: 300,
  //     status: true
  //   }
  // ]
  // myName = "Duy";
  // title = 'my-app';
  // productName: string = "ProductA";
  // productPrice: number = 10;
  // productStatus: boolean = false;
  // productInfo: {
  //   id: number, price: number, name: string
  // } = {
  //     id: 1,
  //     name: "product A",
  //     price: 200
  //   };
  // productlist: {
  //   id: number, price: number, name: string, status: boolean
  // }[] = [
  //     {
  //       id: 1,
  //       name: "productA",
  //       price: 200,
  //       status: false
  //     },
  //     {
  //       id: 2,
  //       name: "productB",
  //       price: 300,
  //       status: true
  //     }
  //   ]
  // onHandleClick() {
  //   this.productStatus = !this.productStatus
  // }
  // onHandlerRemove(id: number) {
  //   this.productList = this.productList.filter(item => item.id !== id)
  // }
  // onHandlekeyPress(event: any) {
  //   console.log(event.target.value)
  //   this.title = event.target.value;
  // }
  // onHandleAdd(product:any){
  //   this.productList.push(product);
  // }

productList :Iproduct[]=mockData;
onHandleAdd(product:any){
  console.log('product',product);
  this.productList.push(product)
}
}
