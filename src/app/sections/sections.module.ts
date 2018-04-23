import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SECTIONS_ROUTES } from './sections.routes';

import { ChartsModule } from 'ng2-charts';

import { SectionsComponent } from './sections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        SectionsComponent,
        DashboardComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        SECTIONS_ROUTES,
        ChartsModule
    ]
})

export class SectionsModule { }
