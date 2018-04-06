import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';


export const appRoutes: Routes =[
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent},
  {path: "**", component: HomeComponent}
];
