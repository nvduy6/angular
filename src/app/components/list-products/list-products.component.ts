import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
productList!:Iproduct[];
  constructor(private productService:ProductService) {
    this.ShowProducts()
   }

  ngOnInit(): void {
  }
  ShowProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.productList=data
    })
  }

}
