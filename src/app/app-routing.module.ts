import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
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
{path:"products",
children:[
  {
    path:'',
    component:ProductsComponent
  },
  {
    path:'add',
    component:ProductAddComponent
  },
  {
    path:'edit/:id',
    component:ProductUpdateComponent,
  }
]

},
//   {path:"about",component:AboutComponent},
//   {path:"product",component:ProductComponent},
//   {path: "product/add",component:ProductAddComponent },
//   {path: "product/:id",component:ProductDetailComponent},
//  {path:"product/edit", component:ProductUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
