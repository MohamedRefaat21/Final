import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {WorksComponent } from './works/works.component';


const routes: Routes = [
{path :'' , redirectTo : 'home' ,pathMatch : "full"},
{path : 'home' ,component : HomeComponent},
{path : 'skills' ,component : SkillsComponent},
{path : 'about' ,component : AboutComponent},
{path : 'contact' ,component : ContactComponent},
{path : 'works' ,component : WorksComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
})
export class AppRoutingModule { }
