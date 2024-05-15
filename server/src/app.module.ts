import { Module } from "@nestjs/common";
import { TaskModule } from "./tasks/tasks.module";

@Module({
    controllers: [],
    providers: [],
    imports: [TaskModule]
})
export class AppModule {}