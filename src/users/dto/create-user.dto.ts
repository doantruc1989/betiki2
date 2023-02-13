export class CreateUserDto {
  email: string;
  username: string;
  password: string;
  refreshToken?: string;
}
