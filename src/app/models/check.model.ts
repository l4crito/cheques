export interface CheckModel {
    value?: number;
    rate?: number;
    date?: Date;
    datePayed?: Date;
    winValue?: number;
    person?: string;
    id?: any;
    status?: CheckStatus;
    selected?: boolean;
}

export enum CheckStatus{
    PENDING='pending',
    PAYED='payed'
}