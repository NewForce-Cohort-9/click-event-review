import { getStudents, getTasks } from "./database.js";

const studentArray = getStudents()
const taskArray = getTasks()

document.addEventListener("click", (clickEvent) => {
    const whatDidWeClick = clickEvent.target

    for(const singleStudent of studentArray){
        for(const singleTask of taskArray){

            if(whatDidWeClick.dataset.name === "student-name"){
                // console.log("Did we click the thing?")
                if(parseInt(whatDidWeClick.dataset.foreignkeyid) === singleTask.id){
                   return window.alert(`This is ${singleStudent.name} and they are working on ${singleTask.lesson}`)
                }
            }
        }
    }
}
);

export const studentList = () => {
  

    let htmlString = '<h1 class="studentList"> Students'

    studentArray.forEach(singleStudent => {
        htmlString += `
        <div class="student-info">
        <p data-name="student-name" data-foreignkeyid="${singleStudent.taskId}">${singleStudent.name}</p>
        <p data-email="student-email">${singleStudent.email}</p>
        <p data-cohort="student-cohort">${singleStudent.cohort}</p>
    </div>
        `
    })
    
    htmlString += '</h1>'

return htmlString
}

// export const SecondaryExport = () => {

// }