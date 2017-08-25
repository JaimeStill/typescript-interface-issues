import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Data } from '../models/data.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IService } from '../interfaces/iservice.interface';
import { CoreApiService } from './core-api.service';
import { ToasterService } from './toaster.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService implements IService<Data> {
    data = new BehaviorSubject<Array<Data>>([]);

    constructor(private http: Http, private coreApi: CoreApiService, private toaster: ToasterService) {
        this.data.asObservable().subscribe({error: (message) => toaster.sendErrorMessage(message)});
    }

    getData() {
        this.coreApi.get<Data[]>('/api/app/getData').subscribe(this.data);
    }

    getShapedData() {
        this.coreApi.get<Data[]>('/api/app/getShapedData').subscribe(this.data);
    }

    getInstantiatedData() {
        this.http.get('/api/app/getData').map(res => {
            return res.json().map(d => {
                return Object.assign(new Data(), d)
            });
        }).catch(this.coreApi.handleError)
        .subscribe(this.data);
    }
}
