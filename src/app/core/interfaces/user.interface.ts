import { UserRole } from './../enums/user-roles.enum';

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  imageUrl: string;
  role: UserRole;
}
