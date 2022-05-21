import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
//   {path:"",component:HomeComponent,
// children:[
//   {
//     path:'detail',
//     component:ProductDetailComponent
//   }
// ]
// },
{path:"products",component:ProductsComponent},
  {path:"about",component:AboutComponent},
  {path:"product",component:ProductComponent},
  {path: "product/add",component:ProductAddComponent },
  {path: "product/:id",component:ProductDetailComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
