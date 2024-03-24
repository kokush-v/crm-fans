import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

import { IUser } from 'src/models/user.interfaces';
import { ERRORS } from 'src/constant/err';
import { LoginUserDto } from 'src/users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginUserDto): Promise<IUser> {
    const user = await this.usersService.findOne(email);
    if (!user) throw new BadRequestException(ERRORS.USER.NOT_EXIST);

    if (bcrypt.compareSync(password, user.password)) {
      return { id: user.id, email: user.email, userName: user.userName };
    } else {
      throw new BadRequestException(ERRORS.USER.WRONG_PASSWORD);
    }
  }

  async login(user: LoginUserDto) {
    const validUser = await this.validateUser(user);

    const payload = { username: validUser.userName, sub: validUser.id };

    return {
      data: validUser,
      access_token: this.jwtService.sign(payload),
    };
  }
}
