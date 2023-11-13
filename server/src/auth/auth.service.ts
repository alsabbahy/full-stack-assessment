import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/users/entities/user.entity';

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
    //@ts-ignore
    const payload = { sub: user?._id, email: user.email };
    return {
      token: await this.jwtService.signAsync(payload),
      user: result,
      expiresIn: 3600,
    };
  }

  async register(createAuthDto: RegisterDto) {
    const existUser = await this.usersService.findByEmail(createAuthDto.email);
    if (existUser) {
      throw new UnauthorizedException();
    }
    const user = await this.usersService.create(createAuthDto);
    const { password, ...result } = user;
    //@ts-ignore
    const payload = { sub: user?._id, email: user.email };
    return {
      token: await this.jwtService.signAsync(payload),
      user: result,
      expiresIn: 3600,
    };
  }
  logout(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
