export interface UserCredentials {
  email: string;
  password: string;
}

export default interface User extends UserCredentials {
  id?: number;
  username: string;
}