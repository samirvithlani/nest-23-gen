import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";



@Schema()
export class Role{

    @Prop()
    name: string;

  


}
export const RoleSchema = SchemaFactory.createForClass(Role);