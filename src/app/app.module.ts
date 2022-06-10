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
import { AddCategoryComponent } from './components/layoutAdmin/category/add-category/add-category.component';
import { ListCategoryComponent } from './components/layoutAdmin/category/list-category/list-category.component';
import { AddPostComponent } from './components/layoutAdmin/post/add-post/add-post.component';
import { ListPostComponent } from './components/layoutAdmin/post/list-post/list-post.component';
import { AddCateProjectComponent } from './components/layoutAdmin/categoryProject/add-cate-project/add-cate-project.component';
import { ListCateProjectComponent } from './components/layoutAdmin/categoryProject/list-cate-project/list-cate-project.component';
import { AddProjectComponent } from './components/layoutAdmin/project/add-project/add-project.component';
import { ListProjectComponent } from './components/layoutAdmin/project/list-project/list-project.component';


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
    AddCategoryComponent,
    ListCategoryComponent,
    AddPostComponent,
    ListPostComponent,
    AddCateProjectComponent,
    ListCateProjectComponent,
    AddProjectComponent,
    ListProjectComponent,
   
  
    
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
