import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @Input('data') productList!: Iproduct[];
  productList!:Iproduct[];
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
  onRemoveItem(id:number){
    // call Api xoa
    this.productService.removeProduct(id).subscribe(()=>{
      // render
      this.productList=this.productList.filter(item =>item.id!==id);
    })
  }
}
