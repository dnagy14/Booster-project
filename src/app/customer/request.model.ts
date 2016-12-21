export class Request {
  name: string;
  email: string;
  make: string;
  model: string;
  year: number;
  fuel: string;
  plate: string;

  constructor(
    name?: string,
    email?: string,
    make?: string,
    model?: string,
    year?: number,
    fuel?: string,
    plate?: string
  ) {
    this.name = name;
    this.email = email;
    this.make = make;
    this.model = model;
    this.year = year;
    this.fuel = fuel;
    this.plate = plate;
  }
}
