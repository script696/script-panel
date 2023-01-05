interface UserDto {
  email: string;
  username: string;
  role: string;
  about?: string;
}

interface UpdateUserDto {
  email: string;
  username: string;
}

export type { UserDto, UpdateUserDto };
