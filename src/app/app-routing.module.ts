import { OurSchoolComponent } from './main-pages/our-school/our-school.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurCurriculumsComponent } from './main-pages/our-curriculums/our-curriculums.component';
import { HeadTeacherWelcomeComponent } from './sub-pages/head-teacher-welcome/head-teacher-welcome.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'home/our-school', component: OurSchoolComponent},
  {path:'home/our-Curriculum', component: OurCurriculumsComponent},


  {path:'headTeacherWelcome', component: HeadTeacherWelcomeComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
