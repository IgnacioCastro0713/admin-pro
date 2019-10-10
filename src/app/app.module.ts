import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './views/dasboard/dasboard.component';
import { Charts1Component } from './views/charts1/charts1.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './views/progress/progress.component';
import { PagesComponent } from './views/pages.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    DasboardComponent,
    Charts1Component,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    PagenotfoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
