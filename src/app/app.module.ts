import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';

import { NavbarComponent } from './unit/navbar/navbar.component';
import { FooterComponent } from './unit/footer/footer.component';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    LoginComponent,
    SignupComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ArtformsComponent,
    SinglepageComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
