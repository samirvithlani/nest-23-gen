import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model, ObjectId } from 'mongoose';


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel:Model<User> ) {}

  //{name, email, age}
  async createUser(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto) //{name, email, age}
  }

  async findAll() :Promise<any>{
    
    return await this.userModel.find().populate('role')
  }

  async findOne(id: ObjectId) {
    return await this.userModel.findById(id)
  }

  async update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {new:true})
  }

  async remove(id: ObjectId):Promise<any> {
    
    return await this.userModel.findByIdAndDelete(id)
  }
}
