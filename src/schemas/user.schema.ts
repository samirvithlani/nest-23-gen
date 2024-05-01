import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Role } from "./role.schema";



@Schema()
export class User{

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    age: number;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:"Role"})
    role :Role


}
export const UserSchema = SchemaFactory.createForClass(User);