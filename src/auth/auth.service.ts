import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthUser } from 'src/schemas/auth.schema';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

  constructor(@InjectModel(AuthUser.name) private authModel: Model<AuthUser>,
   private jwtService: JwtService) { }

   async sigup(createAuthDto:CreateAuthDto){

    const {name,email,password} = createAuthDto;
    const hashedpassword = await bcrypt.hash(password,10);
    const user = await this.authModel.create({name,email,password:hashedpassword});
    const token = this.jwtService.sign({id:user._id});
    return {token};
    
   }

}
