import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service'; 


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
  product:Iproduct={
    id:0,
    name:'',
    price:0,
    // status:''

  }
  constructor(
    // private activatedRoute:ActivatedRoute,
    private productService: ProductService,
    private routes:Router) {
   }

  ngOnInit(): void {
  
  }
  onSubmit() {
    this.productService.addProduct(this.product).subscribe((data)=>{
      console.log('tThemsan phẩm thành công');
      setTimeout(()=>{
        this.routes.navigate(['admin/products'])

      },2000)
      
    })
  }
}
