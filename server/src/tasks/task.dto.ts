import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateTaskDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: '12345', description: 'пароль'})
    @IsString({message: 'Должно быть строкой'})
    readonly password: string;
}