import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { PagenotfoundComponent } from '../login/pagenotfound/pagenotfound.component';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { EntityPageComponent } from '../pages/entity-page/entity-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'app', component: BaseComponentComponent, children: [
      { path: 'home', component: LandingPageComponent },
      { path: 'entity', component: EntityPageComponent },
      { path: '**', component: PagenotfoundComponent }
  ]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];
@NgModule({
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
