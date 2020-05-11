import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { FeedsSectionComponent } from './feeds-section/feeds-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeadSectionComponent,
    FeedsSectionComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
