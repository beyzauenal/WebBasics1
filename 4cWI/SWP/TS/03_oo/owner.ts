export class Owner {
  constructor(
    private firstName: string,
    private lastName: string,
    private age: number
  ) {}

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getAge(): number {
    return this.age;
  }
}

