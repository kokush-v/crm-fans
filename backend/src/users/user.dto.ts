export class CreateUserDto {
  email: string;
  userName: string;
  password: string;
}

export class LoginUserDto {
  email: string;
  password: string;
}
