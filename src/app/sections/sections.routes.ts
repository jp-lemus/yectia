import { RouterModule, Routes } from '@angular/router';

import { SectionsComponent } from './sections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const sectionsRoutes: Routes = [
    {
        path: '',
        component: SectionsComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: AccountSettingsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]}
];

export const SECTIONS_ROUTES = RouterModule.forChild( sectionsRoutes );
