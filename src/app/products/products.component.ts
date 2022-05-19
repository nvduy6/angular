import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @Input('data') productList!: Iproduct[];
  productList!:any;
  constructor(private productService: ProductService) { 
    this.ShowProducts();
  }
  
  ngOnInit(): void {
  }
  ShowProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.productList=data
    })
  }
}
