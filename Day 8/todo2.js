const input = document.getElementById('input')
const button = document.getElementById('button')
const taskArray = []

const taskList = document.createElement('ul')
document.body.appendChild(taskList)

button.addEventListener('click', function () {
    if(input.value !== '') {
        const task = input.value

        taskArray.push(task)

        taskArray.forEach(function(task) {
            const taskHolder = document.createElement('li')
            taskHolder.textContent = task
            taskList.appendChild(taskHolder)
        })
    }
    input.value = ''
})

