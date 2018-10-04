export class Customer {
  constructor(public deliverAddress?: string[],
              public paymentAddress?: string[],
              public phoneNumber?: string[]
  ) { }
}
