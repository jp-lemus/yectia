import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { Page404Component } from './shared/error/page-404/page-404.component';

const appRoutes: Routes = [
        { path: 'signIn', component: SignInComponent },
        { path: 'signUp', component: SignUpComponent },
        { path: 'recoverPassword', component: RecoverPasswordComponent },
        { path: '**', component: Page404Component }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

