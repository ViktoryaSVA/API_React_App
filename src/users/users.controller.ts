import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { Crud } from '@nestjsx/crud';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Crud({
    model: {
        type: User
    }
})
@Controller('api/clients')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<{ token: string }> {
        return this.usersService.login(loginUserDto);
    }

    @Get('list')
    async getListOfUsers(): Promise<User[]> {
        return this.usersService.getListOfUsers();
    }

}