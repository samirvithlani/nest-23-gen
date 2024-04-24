import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Doe",
    }
  ]


  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): any {

    return this.users
  }

  getUserById(id:number): any {

    return this.users.find(user => user.id == id)

  }


}
