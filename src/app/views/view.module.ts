import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PagesComponent} from './pages.component';
import {Charts1Component} from './charts1/charts1.component';
import {DasboardComponent} from './dasboard/dasboard.component';
import {ProgressComponent} from './progress/progress.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

import {SharedModule} from '../components/shared/shared.module';
import {PagesRoutesModule} from '../routes/pages-routes.module';
import {BasicsModule} from '../components/basics/basics.module';


@NgModule({
  declarations: [ // views
    PagesComponent,
    DasboardComponent,
    LoginComponent,
    RegisterComponent,
    Charts1Component,
    ProgressComponent,
    PagenotfoundComponent
  ],
  exports: [ // views
    Charts1Component,
    DasboardComponent,
    ProgressComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent
  ],
  imports: [ // modules
    BasicsModule,
    SharedModule,
    PagesRoutesModule,
    // Core modules
    CommonModule,
    FormsModule,
  ]
})
export class ViewModule {}
