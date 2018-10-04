import {Customer} from './customer.model';
import {Manager} from './manager.model';

export class User {
  constructor(public email: string, public password: string,
              public fullName?: string, public birthday?: Date,
              public customer?: Customer, public manager?: Manager,
              public targetAccount?: string[], public createdAt?: Date
  ) { }
}
