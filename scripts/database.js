const database = {
    students: [
        {
            id: 1,
            name: "Macey Lewis",
            email: "macey@macey.com",
            cohort: 9,
            taskId: 3
        },
        {
            id: 2,
            name: "LJ White",
            email: "lj@lj.com",
            cohort: 9,
            taskId: 1
        },
        {
            id: 3,
            name: "Jacob Dorris",
            email: "jacob@jacob.com",
            cohort: 9,
            taskId: 2
        }
    ],
    tasks: [
        {
            id: 1, 
            lesson: "Complete Deshawn's Dogwalking Exercise"
        },
        {
            id: 2, 
            lesson: "Complete Shipping Ships that are Shipping Exercise"
        },
        {
            id: 3, 
            lesson: "Complete Brew up the Awakenings exercise"
        }
    ]
}

export const getStudents = () => {
    return database.students.map(singleStudent => ({...singleStudent}))
}

export const getTasks = () => {
    return database.tasks.map(singleTask => ({...singleTask}))
}