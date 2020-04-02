import { SignupComponent } from './landing-page/signup/signup.component';
import { LoginComponent } from './landing-page/login/login.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingContentComponent } from './landing-page/landing-content/landing-content.component';


const routes: Routes = [
  { path: '', redirectTo: '/unicaan', pathMatch: 'full' },
  {
    path: 'unicaan', component: LandingPageComponent,
    children: [
      {path:'', component:LandingContentComponent},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
