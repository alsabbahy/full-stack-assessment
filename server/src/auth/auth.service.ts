import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    const payload = { sub: user?._id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };

    return result;
  }

  register(createAuthDto: RegisterDto) {
    throw new Error('Method not implemented.');
  }
  logout(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
