export class CreatePersonDto {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export class UpdatePersonDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number;
}
