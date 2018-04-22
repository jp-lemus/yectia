import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { SectionsModule } from './sections/sections.module';
// routes
import { APP_ROUTES } from './app.routes';
// componets
import { AppComponent } from './app.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ConfirmSignUpComponent } from './login/confirm-sign-up/confirm-sign-up.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { LockscreenComponent } from './login/lockscreen/lockscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    RecoverPasswordComponent,
    LockscreenComponent,
    SignInComponent,
    SignUpComponent,
    ConfirmSignUpComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    SectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
