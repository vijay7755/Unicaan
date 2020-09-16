import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'', loadChildren:() => import('./feature/landing-page/landingPage.module').then(m => m.LandingPageModule)},
  {path:'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
