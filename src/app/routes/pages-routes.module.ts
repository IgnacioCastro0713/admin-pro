import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from '../views/pages.component';
import {DasboardComponent} from '../views/dasboard/dasboard.component';
import {ProgressComponent} from '../views/progress/progress.component';
import {Charts1Component} from '../views/charts1/charts1.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutesModule { }
