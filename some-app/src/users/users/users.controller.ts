import { Controller, Get } from '@nestjs/common';
import { Users } from '../users.entity';
import {UsersService} from "./users.service";
import { Post, Body} from  '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    index(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Post('create')
    async create(@Body() usersData: Users): Promise<any> {
        usersData.created_at = Date();
        return this.usersService.create(usersData);
            }

    constructor(private usersService: UsersService){

    }
}
