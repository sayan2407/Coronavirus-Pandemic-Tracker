import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './MyComponents/countries/countries.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { TopbarComponent } from './MyComponents/topbar/topbar.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'countries',
    component:CountriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
