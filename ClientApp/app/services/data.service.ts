import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Data } from '../models/data.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IService } from '../interfaces/iservice.interface';
import { CoreApiService } from './core-api.service';
import { ToasterService } from './toaster.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

    getShapedData() {
        this.coreApi.get<Data[]>('/api/app/getShapedData').subscribe(
            data => {
                this.data.next(data);
            },
            error => {
                this.toaster.sendErrorMessage(error);
            }
        )
    }

    getInstantiatedData() {
        this.http.get('/api/app/getData').map(res => {
            try {
                const result = new Array<Data>();
                const data: Data[] = res.json();

                data.forEach(item => {
                    result.push(Object.assign(new Data(), item));
                });

                return result;

            } catch (error) {
                this.toaster.sendErrorMessage(error);
                return;
            }
        }).catch(this.coreApi.handleError)
        .subscribe(data => {
            this.data.next(data);
        },
        error => {
            this.toaster.sendErrorMessage(error);
        });
    }
}
