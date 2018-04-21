import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ConfirmSignUpComponent } from './login/confirm-sign-up/confirm-sign-up.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { LockscreenComponent } from './login/lockscreen/lockscreen.component';

import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';

import { Page404Component } from './shared/error/page-404/page-404.component';

import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { SectionsComponent } from './sections/sections.component';


@NgModule({
  declarations: [
    AppComponent,
    RecoverPasswordComponent,
    LockscreenComponent,
    SignInComponent,
    SignUpComponent,
    ConfirmSignUpComponent,
    Page404Component,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
