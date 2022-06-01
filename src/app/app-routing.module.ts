import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminGuard } from './services/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ListProductsComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
    
    ],
   
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'about',
    component:AboutComponent
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: "products",canActivate:[AdminGuard],
        children: [
          {
            path: '',
            component: ProductsComponent
          },
          {
            path: 'add',
            component: ProductAddComponent
          },
          {
            path: 'edit/:id',
            component: ProductAddComponent,
          }
        ]

      }

    ]
  }
  ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
