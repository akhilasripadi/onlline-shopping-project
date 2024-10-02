import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectEmployeeComponent } from './pages/project-employee/project-employee.component';
import { CssannimationsComponent } from './pages/cssannimations/cssannimations.component';




const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
    
   },
   {
    path:'login',
    component:LoginComponent
   
   },
   {
    path:'',
    component:LayoutComponent,
    children:[
      { 
        path:'dashboard',
        component:DashboardComponent
      },
      { 
        path:'employee',
        component:EmployeeComponent
  
      },
      {
        path:'project',
        component:ProjectsComponent
      },
      {
        path:'project-employee',
        component:CssannimationsComponent
  
      }
    ]
   }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 