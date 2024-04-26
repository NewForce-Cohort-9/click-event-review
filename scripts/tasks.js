import { getTasks } from "./database.js";


export const taskList = () => {
    const taskArray = getTasks()

    let htmlString = '<h1 class="taskList"> Tasks'

    taskArray.forEach(singleTask => {
        htmlString += `
        <div class="task-info">
        <p>${singleTask.lesson}</p>
    </div>

        `
    })
    
    htmlString += '</h1>'

return htmlString
}