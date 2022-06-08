import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './components/layoutCline/home/home.component';
import { BlogComponent } from './components/layoutCline/blog/blog.component';
import { WorkComponent } from './components/layoutCline/work/work.component';
import { LayoutComponent } from './components/layoutCline/layout/layout.component';
import { DashboardComponent } from './components/layoutAdmin/dashboard/dashboard.component';
import { AddUserComponent } from './components/layoutAdmin/authen/add-user/add-user.component';
import { ListUserComponent } from './components/layoutAdmin/authen/list-user/list-user.component';
import { UpdateUserComponent } from './components/layoutAdmin/authen/update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    WorkComponent,
    LayoutComponent,
    DashboardComponent,
    AddUserComponent,
    ListUserComponent,
    UpdateUserComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
