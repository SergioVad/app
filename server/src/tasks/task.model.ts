import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

class TaskDto {
    id: string;
    type: string;
    description: string;
    name: string;
    date: string;
    status: string;
}

@Table({tableName: 'tasks'})
export class Task extends Model<Task, TaskDto> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Улучшение', description: 'Тип'})
    @Column({type: DataType.STRING, allowNull: false})
    type: string;

    @ApiProperty({example: 'Не работает создание отчета', description: 'Описание'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ApiProperty({example: 'Петров Петр Петрович', description: 'Пользователь'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: '01.01.2000', description: 'Дата'})
    @Column({type: DataType.STRING, allowNull: false})
    date: string;

    @ApiProperty({example: 'Выполнено', description: 'Статус'})
    @Column({type: DataType.STRING, allowNull: false})
    status: string;
}
