import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthRoutesModule} from './routes/auth-routes.module';
import {PagesRoutesModule} from './routes/pages-routes.module';
import {PagenotfoundComponent} from './views/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [
    RouterModule,
    AuthRoutesModule,
    PagesRoutesModule
  ]
})
export class AppRoutingModule {}
