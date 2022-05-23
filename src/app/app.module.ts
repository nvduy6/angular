import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListProductsComponent } from './components/list-products/list-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductsComponent,
    ProductUpdateComponent,
    HeaderComponent,
    HomeComponent,
   AdminComponent,
   ListProductsComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
