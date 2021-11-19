const tasks = document.getElementById('tasks-list')


tasks.addEventListener('click', e => {

    console.log(e.target)
    if (e.target.type == 'checkbox' && (e.target.className == 'notchecked')){
        let checkState = {"id" : `${e.target.id}`}
        changeNoteState(checkState)
    } 
    else if (e.target.className == 'btn-delete'){
        let data = {"id": `${e.target.id}`}
        deleteTaskById(data);
    }
    else if (e.target.type == 'checkbox' && (e.target.className == 'checked')){
        let checkState = {"id" : `${e.target.id}`}
        changeNoteState(checkState)
    }
    else if (e.target.className == 'btn-edit'){
        let id = e.target.id
        let data = document.getElementById(`note-${id}`)
        document.getElementById('task-to-edit').innerHTML = `"${data.textContent}"`
        document.getElementById('input-edit').placeholder = `${data.textContent}`
        document.getElementById('input-edit').value = id
    }

})

async function deleteTaskById(data){
    try{
        await fetch("http://localhost:8080/api/tasks/delete", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' }
        })
        window.location = window.location.href;
    }
    catch(err){
        console.log(err);
    }
}

async function changeNoteState(check){
    try{
        await fetch("http://localhost:8080/api/tasks/checked", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(check), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' }
        })
        window.location = window.location.href;
    }
    catch(err){
        console.log(err);
    }
}

async function renderNote(idNote){
    try{
        await fetch("http://localhost:8080/api/tasks/edit", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(idNote), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' }
        })
        window.location = window.location.href;
    }
    catch(err){
        console.log(err);
    }
}




