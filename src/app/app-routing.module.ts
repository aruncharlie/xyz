import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { loginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TutorregisterComponent } from './tutorregister/tutorregister.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login',component:loginComponent},
  { path : 'register',component:RegisterComponent},
  { path : 'tutorregister', component :TutorregisterComponent},

  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
