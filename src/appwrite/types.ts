interface LoginUserAccount {
  email: string;
  password: string;
}

interface CreateUserAccount extends LoginUserAccount {
  name: string;
}

export type { LoginUserAccount, CreateUserAccount };
