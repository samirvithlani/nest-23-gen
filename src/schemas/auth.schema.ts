import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class AuthUser{

    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    password: string;

}

export const AuthUserSchema = SchemaFactory.createForClass(AuthUser);