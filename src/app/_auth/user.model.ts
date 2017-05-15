export class User {
  constructor(public email: string, public password: string,
              public fullName?: string, public birthday?: Date
  ) { }
}
