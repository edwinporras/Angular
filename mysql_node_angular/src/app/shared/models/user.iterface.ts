export type Roles= 'SUSCRIPTOR'| 'ADMIN';

export interface User{
  username: string;
  password: string;
}
// RESPUESTA DEL SERVIDOR
export interface UserResponse{
  message: string;
  token: string;
  userId: number;
  role: Roles;
}
