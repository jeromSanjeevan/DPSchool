import { OurSchoolComponent } from './main-pages/our-school/our-school.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurCurriculumsComponent } from './main-pages/our-curriculums/our-curriculums.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'home/our-school', component: OurSchoolComponent},
  {path:'home/our-Curriculum', component: OurCurriculumsComponent},
 

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
