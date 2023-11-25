import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
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








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    
    

    
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
    BrowserAnimationsModule
    

    
    
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
