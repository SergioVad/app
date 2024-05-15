import { Injectable } from "@nestjs/common";
import { Task } from "./task.model";
import { askOrderSort, deskOrderSort } from "./helpers/definitionOrderSort";
const fs = require('fs');
const path = require('path');

@Injectable()
export class TaskService{
    getTasks(query: object) {
        const path_db = path.join(__dirname, '..', '..', 'db.json')
        const db_json = fs.readFileSync(path_db, {encoding: 'utf-8'})
        const db = JSON.parse(db_json)
        if (!Array.isArray(db)) {
            return []
        }
        return Object.keys(query).length === 0
            ? db
            : query["order"] === 'asc' 
                ? askOrderSort(db, query)
                : deskOrderSort(db, query)
        }


    createTask(dto: Task) {
        const path_db = path.join(__dirname, '..', '..', 'db.json')
        const db_json = fs.readFileSync(path_db, {encoding: 'utf-8'})
        const db = JSON.parse(db_json)
        db.push(dto)
        fs.writeFileSync(path_db, JSON.stringify(db));
    }
}