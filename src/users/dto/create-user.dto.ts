export class CreateUserDto {
  email: string;
  username: string;
  password: string;
  refreshToken?: string;
  address1: string;
  address2: string;
  address3: string;
}
