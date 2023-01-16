export interface User {
  email: string;
  username: string;
  role: string;
  about?: string;
  avatar?: string;
}

export interface getUserResponse extends User {}
