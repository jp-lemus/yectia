import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SECTIONS_ROUTES } from './sections.routes';

import { SectionsComponent } from './sections.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        SectionsComponent,
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        SECTIONS_ROUTES
    ]
})

export class SectionsModule { }
