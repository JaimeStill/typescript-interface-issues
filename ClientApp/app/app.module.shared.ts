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

import { PrismComponent } from './components/prism/prism.component';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { MappedClientComponent } from './components/mapped-client/mapped-client.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { ShapedApiComponent } from './components/shaped-api/shaped-api.component';
import { PlainJsonComponent } from './components/plain-json/plain-json.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        PrismComponent,
        AppComponent,
        HomeComponent,
        MappedClientComponent,
        SidepanelComponent,
        ShapedApiComponent,
        PlainJsonComponent
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
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'mapped-client', component: MappedClientComponent },
            { path: 'shaped-api', component: ShapedApiComponent },
            { path: 'plain-json', component: PlainJsonComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
