import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUserSchema } from 'src/schemas/auth.schema';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.registerAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:(configService:ConfigService)=>({
      secret:configService.get<string>('JWT_SECRET'),
      signOptions:{
        expiresIn:configService.get('JWT_EXPIRES_IN')
      }
    })
  }),

  MongooseModule.forFeature([{name:'AuthUser',schema:AuthUserSchema}])
],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
