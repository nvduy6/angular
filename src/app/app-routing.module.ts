import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/layoutAdmin/authen/add-user/add-user.component';
import { ListUserComponent } from './components/layoutAdmin/authen/list-user/list-user.component';
import { AddCategoryComponent } from './components/layoutAdmin/category/add-category/add-category.component';
import { ListCategoryComponent } from './components/layoutAdmin/category/list-category/list-category.component';
import { AddCateProjectComponent } from './components/layoutAdmin/categoryProject/add-cate-project/add-cate-project.component';
import { ListCateProjectComponent } from './components/layoutAdmin/categoryProject/list-cate-project/list-cate-project.component';
import { DashboardComponent } from './components/layoutAdmin/dashboard/dashboard.component';
import { ListConcatComponent } from './components/layoutAdmin/list-concat/list-concat.component';
import { AddPostComponent } from './components/layoutAdmin/post/add-post/add-post.component';
import { ListPostComponent } from './components/layoutAdmin/post/list-post/list-post.component';
import { AddProjectComponent } from './components/layoutAdmin/project/add-project/add-project.component';
import { ListProjectComponent } from './components/layoutAdmin/project/list-project/list-project.component';
// import { BlogComponent } from './components/layoutCline/blog/blog.component';
// import { CateBlogComponent } from './components/layoutCline/cateBlog/cate-blog/cate-blog.component';
import { ContactComponent } from './components/layoutCline/contact/contact/contact.component';
import { DatailCateProjectComponent } from './components/layoutCline/datail-cate-project/datail-cate-project.component';
import { HomeComponent } from './components/layoutCline/home/home.component';
import { LayoutComponent } from './components/layoutCline/layout/layout.component';
import { ListCatePostComponent } from './components/layoutCline/list-cate-post/list-cate-post.component';
import { PostDetailComponent } from './components/layoutCline/post-detail/post-detail.component';
import { PostComponent } from './components/layoutCline/post/post.component';
import { WorkDetailComponent } from './components/layoutCline/work-detail/work-detail.component';
import { WorkComponent } from './components/layoutCline/work/work.component';

import { AdminGuard } from './services/guards/admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            component: ListUserComponent,
          },
          {
            path: 'add',
            component: AddUserComponent
          },
          {
            path: 'edit/:id',
            component: AddUserComponent
          }
        ]
      },
      {
        path: 'cate',
        children: [
          {
            path: '',
            component: ListCategoryComponent,
          },
          {
            path: 'add',
            component: AddCategoryComponent,
          },
          {
            path: 'edit/:id',
            component: AddCategoryComponent,
          }
        ]
      },
      {
        path:'post',
        children:[
          {path:'',
        component:ListPostComponent},
        {
          path:'add',
          component:AddPostComponent
        },
        {
          path:'edit/:id',
          component:AddPostComponent
        }

        ]
      },
      {
        path:'cateproject',
        children:[
        {
          path:'',
          component:ListCateProjectComponent,

        },
        {
          path:'add',
          component:AddCateProjectComponent,
        },
        {
          path:'edit/:id',
          component:AddCateProjectComponent
        }
        ]
      },
      {
        path:'project',
        children:[
          {
            path:'',
            component:ListProjectComponent
          },
          {
            path:'add',
            component:AddProjectComponent
          },
          {
            path:'edit/:id',
            component:AddProjectComponent
          }
        ]
      },
      {
        path:'concat',
        children:[
          {
            path:"",
            component:ListConcatComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            children: [
              {
                path: '',
                component: HomeComponent,
              },
              {
                path: 'work',
                component: WorkComponent,
              },
              {
                path: 'blog',
                component: PostComponent
              },
              {
                path:"project/detail/:id",
                component:WorkDetailComponent
              },
              {
                path:"blog/detail/:id",
                component:PostDetailComponent,
              },
              {
                path:"contact",
                component:ContactComponent
              },
              {
                path:"categorydetail/:id",
                component:ListCatePostComponent
              },
              {
                path:"categoryProjectdetail/:id",
                component:DatailCateProjectComponent
              }

            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
