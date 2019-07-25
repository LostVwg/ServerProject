import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {ApiModelProperty} from "@nestjs/swagger";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
   id: number;

    @ApiModelProperty()
    @Column()
    user_login: string;

    @Column({nullable: true})
    created_at: string;

    @Column({nullable: true})
    updated_at: string;

    @Column({nullable: true})
    deleted_at: string;

}
