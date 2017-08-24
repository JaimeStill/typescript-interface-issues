import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ToasterService } from './toaster.service';
import { CoreApiService } from './core-api.service';
import { Theme } from '../models/theme.model';

@Injectable()
export class AppService {
    themes = new BehaviorSubject<Array<Theme>>([]);

    constructor(private toaster: ToasterService, private coreApi: CoreApiService, private router: Router) { }

    getThemes() {
        this.coreApi.get<Array<Theme>>('/api/app/getThemes').subscribe(
            themes => {
                this.themes.next(themes);
            },
            error => {
                this.toaster.sendErrorMessage(error);
            });
    }
}
