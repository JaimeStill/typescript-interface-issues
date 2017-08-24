import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';
import { DataService } from '../../services/data.service';
import { CoreDataSource } from '../../datasources/core.datasource';
import { Data } from '../../models/data.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'mapped-client',
    templateUrl: 'mapped-client.component.html',
    styleUrls: ['mapped-client.component.css'],
    providers: [DataService]
})
export class MappedClientComponent implements OnInit {
    displayedColumns = ['id', 'displayName'];
    dataSource: CoreDataSource<Data> | null;
    @ViewChild('filter') filter: ElementRef;

    constructor(private data: DataService, private toaster: ToasterService) {
        data.getInstantiatedData();
    }

    ngOnInit() {
        this.dataSource = new CoreDataSource(this.data, this.toaster);

        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}
