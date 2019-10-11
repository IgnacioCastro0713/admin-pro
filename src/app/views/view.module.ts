import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {Charts1Component} from './charts1/charts1.component';
import {DasboardComponent} from './dasboard/dasboard.component';
import {ProgressComponent} from './progress/progress.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {SharedModule} from '../components/shared/shared.module';
import {PagesRoutesModule} from '../routes/pages-routes.module';


@NgModule({
  declarations: [
    PagesComponent,
    DasboardComponent,
    LoginComponent,
    RegisterComponent,
    Charts1Component,
    ProgressComponent,
    PagenotfoundComponent
  ],
  exports: [
    Charts1Component,
    DasboardComponent,
    ProgressComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent
  ],
  imports: [
    SharedModule,
    PagesRoutesModule,
  ]
})
export class ViewModule {}
