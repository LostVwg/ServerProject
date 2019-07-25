import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from "../users.entity";

@Injectable()
export class UsersService {

    async  findAll(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async  create(users: Users): Promise<Users> {
        return await this.usersRepository.save(users);
            }

    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) { }
}
