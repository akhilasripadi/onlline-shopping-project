import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';

import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { CarouselModule } from 'primeng/carousel';
import { ProductsService } from './products.service';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ProjectEmployeeComponent } from './pages/project-employee/project-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationService } from './services/notification.service';
import { CssannimationsComponent } from './pages/cssannimations/cssannimations.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api'; 










@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    LayoutComponent,
    ProjectsComponent,
    DashboardComponent,

    ProjectEmployeeComponent,
     CssannimationsComponent,
   
 
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ImageModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    MegaMenuModule,
    CarouselModule,
    DialogModule,
    DropdownModule,
    NoopAnimationsModule,
    PanelModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    TranslateModule.forRoot(),
    ToastModule,
    
    

    
    
  ],
  providers: [ProductsService,EmployeeService,NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
