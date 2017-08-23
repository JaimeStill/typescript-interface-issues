import { IProperty } from '../interfaces/iproperty.interface';

export class Data implements IProperty {
    id: number;
    displayName: string;
    get filter(): string { return this.displayName }
}
