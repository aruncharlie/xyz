import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {FormsModule  } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { loginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TutorregisterComponent } from './tutorregister/tutorregister.component';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      loginComponent,
      RegisterComponent,
      TutorregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
