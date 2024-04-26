import { studentList } from "./students.js"
import { taskList } from "./tasks.js"

const parentHTMLContainer = document.getElementById("container")

// parentHTMLContainer.innerHTML = studentList()

// parentHTMLContainer.innerHTML += taskList()

const htmlContainer = `
<div> Student div: ${studentList()} </div>
<div> Task div: ${taskList()} </div>
`

parentHTMLContainer.innerHTML = htmlContainer