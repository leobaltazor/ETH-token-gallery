import { ROLES } from './roles.constants';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: ROLES;
}
