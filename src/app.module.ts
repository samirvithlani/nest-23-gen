import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forRoot("mongodb://127.0.0.1:27017/23nestgen"), UsersModule, RolesModule, AuthModule,ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
