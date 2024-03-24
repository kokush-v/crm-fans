import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import User from 'src/models/user.seq.model';

@Injectable()
export class UsersService {
  create(user: CreateUserDto) {
    const newUser = User.create(Object.assign(user));
    return newUser;
  }

  findOne(email: string) {
    const user = User.findOne({ where: { email } });
    return user;
  }
}

export default new UsersService();
