import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ng6-toastr-notifications';
import { CookieService } from 'ngx-cookie-service';
//import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

import { EncrDecrService } from './shared/services/encr-decr.service';
import { LoadingPageModule, MaterialBarModule, FoldingCubeModule } from 'angular-loading-page';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SharedDataService } from './shared/services/shared.service';
import { LoginComponent } from './login/login.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { BaseHeaderComponent } from './base-component/base-header/base-header.component';
import { BaseLeftSidebarComponent } from './base-component/base-left-sidebar/base-left-sidebar.component';
import { BaseContentComponent } from './base-component/base-content/base-content.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
// import { LandingService } from './shared/services/landing.service';
import { EntityPageComponent } from './pages/entity-page/entity-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponentComponent,
    BaseHeaderComponent,
    BaseLeftSidebarComponent,
    BaseContentComponent,
    PagenotfoundComponent,
    LandingPageComponent,
    EntityPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    LoadingPageModule,
    MaterialBarModule,
    FoldingCubeModule,
    HttpClientModule,
    //NgxPaginationModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [CookieService, SharedDataService, EncrDecrService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
