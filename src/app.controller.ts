import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/usertest")
  getUsers(@Req() req, @Res() res): any {

    //return this.appService.getUsers();
    res.json({
      message: "Users fetched successfully",
      data: this.appService.getUsers()
    })
  }

  @Get("/user/:id")
  getUserById(@Req() req, @Res() res): any {

    var id = req.params.id
    var user = this.appService.getUserById(id)
    if (user) {
      res.json({
        message: "User fetched successfully",
        data: user
      })
    }
    else {
      res.json({
        message: "User not found",
        data: null
      })
    }


  }

}
