import { BadRequestException, Body, Controller, Get, Logger, Post, Query } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Task } from "./task.model";

@ApiTags('Пользователи')
@Controller('/api')
export class TaskController {
    private logger = new Logger('TaskController')

    constructor(private taskServive: TaskService) {}

    @ApiOperation({summary: 'Получение всех задач'})
    @ApiResponse({status: 200, type: [Task]})
    @Get("/tasks")
    getTasks(@Query() query: object) {
        try {
            this.logger.verbose('All tasks received')
            return this.taskServive.getTasks(query)
        } catch (error) {
            this.logger.error(`Task failed with an error`, error.stack)
            throw new BadRequestException('Что-то пошло не так', { cause: new Error(), description: error })
        }
    }

    @ApiOperation({summary: 'Создание задачи'})
    @ApiResponse({status: 200, type: Task})
    @Post('/tasks')
    createTask(@Body() dto: Task) {
        try {
            this.logger.verbose(`Task created with data ${JSON.stringify(dto)}`)
            return this.taskServive.createTask(dto)
        } catch (error) {
            this.logger.error(`Task with data - ${JSON.stringify(dto)} failed with an error`, error.stack)
            throw new BadRequestException('Что-то пошло не так', { cause: new Error(), description: error })
        }
    }
}