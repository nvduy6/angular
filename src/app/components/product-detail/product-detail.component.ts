import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service'; 
import mockData from '../../data';
import { Iproduct } from '../../models/Product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
productDetail!:Iproduct
  constructor(private router:ActivatedRoute,
  private productService: ProductService) {

    const id = this.router.snapshot.paramMap.get('id')!;
    this.productService.getProduct(+id).subscribe(data=>{this.productDetail=data})
   }

  ngOnInit(): void {
  }

}
