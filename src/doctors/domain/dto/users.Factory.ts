export class CreateUserInputModel {
  phone: string;
  name: string;
}

export class UsersFactory {
  constructor(public id: string, public phone: string, public name: string) {}
}
