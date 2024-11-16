import { todos } from "../utils/db.js"

export function Todo(item) {
    const div = document.createElement('div')
    const left = document.createElement('div')
    const title = document.createElement('span')
    const time = document.createElement('span')
    const del = document.createElement('button')
    const img = document.createElement('img')

    div.classList.add('todo')
    left.classList.add("left")
    title.classList.add('title')
    time.classList.add('time')

    img.src = "./public/icons/close.svg"
    img.alt = "del"

    title.innerHTML = item.title
    time.innerHTML = item.time

    div.append(left, del)
    left.append(title, time)
    del.append(img)

    del.onclick = () => {
        if(prompt(`Are u sure?`)) {
            const idx = todos.indexOf(item)
            todos.splice(idx, 1)
            div.remove()   
        } 
    }

    return div
}