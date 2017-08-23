import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Data } from '../models/data.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IService } from '../interfaces/iservice.interface';
import { CoreApiService } from './core-api.service';
import { ToasterService } from './toaster.service';

@Injectable()
export class DataService implements IService<Data> {
    data = new BehaviorSubject<Array<Data>>([]);

    constructor(private http: Http, private coreApi: CoreApiService, private toaster: ToasterService) {}

    getData() {
        this.coreApi.get<Data[]>('/api/app/getData').subscribe(
            data => {
                this.data.next(data);
            },
            error => {
                this.toaster.sendErrorMessage(error);
            }
        )
    }

    getForcedData() {
        this.coreApi.get<Data[]>('/api/app/getForcedData').subscribe(
            data => {
                this.data.next(data);
            },
            error => {
                this.toaster.sendErrorMessage(error);
            }
        )
    }
}
