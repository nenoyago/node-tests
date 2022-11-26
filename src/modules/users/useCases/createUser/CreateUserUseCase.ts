import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IUserRequest {
  name: string;
  username: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, username, name }: IUserRequest) {
    const userAlreadyExists = await this.usersRepository.exists(username);

    if (userAlreadyExists) {
      throw new AppError({ message: 'User already exists' });
    }

    const userCreate = User.create({ email, username, name });

    const user = await this.usersRepository.create(userCreate);

    return user;
  }
}
