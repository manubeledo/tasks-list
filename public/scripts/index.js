console.log("Desde el script")

const tasks = document.getElementById('tasks-list')


tasks.addEventListener('click', e => {
    console.log(e.target.id);
    let data = {"id": `${e.target.id}`}
    deleteTaskById(data);
})

async function deleteTaskById(data){
    try{
        
    await fetch("http://localhost:8080/api/tasks/delete", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'Content-Type': 'application/json' }
    })}
    catch(err){
        console.log(err);
    }
}
