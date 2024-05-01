import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from 'src/schemas/role.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"Role", schema: RoleSchema}])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
