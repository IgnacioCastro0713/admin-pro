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

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    Charts1Component,
    PagenotfoundComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
