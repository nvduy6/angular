import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service'; 

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
product!:Iproduct;
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private routes: Router
  ) { }
id!:number;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((data)=>{
      this.product = data;
    });
  }
updateProduct(){
  this.productService.updateProduct(this.product).subscribe(()=>{
    this.routes.navigate(['admin/products']);
  })
}
}
