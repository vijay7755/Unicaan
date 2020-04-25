import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'', loadChildren:() => import('./functional/landing-page/landingPage.module').then(m => m.LandingPageModule)},
  {path:'home', loadChildren: () => import('./functional/home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
