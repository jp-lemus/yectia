import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { Page404Component } from './shared/error/page-404/page-404.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { SectionsComponent } from './sections/sections.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SectionsComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]},
        { path: 'signIn', component: SignInComponent },
        { path: 'signUp', component: SignUpComponent },
        { path: 'recoverPassword', component: RecoverPasswordComponent },
        { path: '**', component: Page404Component }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

