import { NgModule } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app.module.material';

import { ThemeService } from './services/theme.service';
import { ToasterService } from './services/toaster.service';
import { CoreApiService } from './services/core-api.service';
import { NoCacheRequestOptions } from './services/no-cache-request-options';
import { SidepanelService } from './services/sidepanel.service';
import { AppService } from './services/app.service';

import { AppComponent } from './components/app/app.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { ForcedApiComponent } from './components/forced-api/forced-api.component';
import { FailedApiComponent } from './components/failed-api/failed-api.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        SidepanelComponent,
        ForcedApiComponent,
        FailedApiComponent
    ],
    providers: [
        ThemeService,
        ToasterService,
        CoreApiService,
        SidepanelService,
        AppService,
        { provide: RequestOptions, useClass: NoCacheRequestOptions }
    ],
    imports: [
        AppMaterialModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'forced-api', pathMatch: 'full' },
            { path: 'forced-api', component: ForcedApiComponent },
            { path: 'failed-api', component: FailedApiComponent },
            { path: '**', redirectTo: 'forced-api' }
        ])
    ]
};
