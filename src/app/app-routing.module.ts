import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/layoutAdmin/authen/add-user/add-user.component';
import { ListUserComponent } from './components/layoutAdmin/authen/list-user/list-user.component';
import { AddCategoryComponent } from './components/layoutAdmin/category/add-category/add-category.component';
import { ListCategoryComponent } from './components/layoutAdmin/category/list-category/list-category.component';
import { DashboardComponent } from './components/layoutAdmin/dashboard/dashboard.component';
import { BlogComponent } from './components/layoutCline/blog/blog.component';
import { HomeComponent } from './components/layoutCline/home/home.component';
import { LayoutComponent } from './components/layoutCline/layout/layout.component';
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
                component: BlogComponent
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
