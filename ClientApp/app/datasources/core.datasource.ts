import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { ToasterService } from '../services/toaster.service';
import { IService } from '../interfaces/iservice.interface';
import { IProperty } from '../interfaces/iproperty.interface';

export class CoreDataSource<TItem extends IProperty> extends DataSource<any> {
    filterChange = new BehaviorSubject('');
    filteredData: TItem[];
    get filter(): string { return this.filterChange.value; }
    set filter(filter: string) { this.filterChange.next(filter); }

    constructor(private service: IService<TItem>, private toaster: ToasterService) {
        super();
        this.filteredData = service.data.value.slice();
    }

    connect(): Observable<TItem[]> {
        const displayDataChanges = [
            this.service.data,
            this.filterChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            try {
                this.filteredData = this.service.data.value.slice().filter((item: TItem) => {
                    const searchStr = item.filter.toLowerCase();
                    return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
                });

                return this.filteredData;
            } catch (error) {
                this.toaster.sendErrorMessage(error);
            }
        });
    }

    disconnect() { }
}
