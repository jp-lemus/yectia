import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './sections.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const sectionsRoutes: Routes = [
    {
        path: '',
        component: SectionsComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]}
];

export const SECTIONS_ROUTES = RouterModule.forChild( sectionsRoutes );
