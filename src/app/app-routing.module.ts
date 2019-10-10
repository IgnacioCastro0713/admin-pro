import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './views/pages.component';
import {DasboardComponent} from './views/dasboard/dasboard.component';
import {LoginComponent} from './views/login/login.component';
import {Charts1Component} from './views/charts1/charts1.component';
import {PagenotfoundComponent} from './views/pagenotfound/pagenotfound.component';
import {ProgressComponent} from './views/progress/progress.component';
import {RegisterComponent} from './views/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DasboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'charts1', component: Charts1Component},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
