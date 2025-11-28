// let todoArray=[
//     {task:"Wake up",time:"6am"},
//     { task: "BreakFast", time: "7am" },
//     { task: "Classes", time: "8pm" },
//     { task: "Lunch", time: "2pm" },
//     { task: "Study", time: "6pm" },
//     { task: "Sleep", time: "10pm" }
// ]
let api;
let todoArray=[];
async function fun(){
    api="http://localhost:3000/todolist";
    let res=await axios.get(api);
    console.log(res.data);
    todoArray=res.data;
    display();
}


function display(){
    let trs="";
    for(let ind in todoArray){
        let sno=parseInt(ind)+1;
        
        trs+=`
            <tr>
                <td>${sno}</td>
                <td>${todoArray[ind].task}</td>
                <td>${todoArray[ind].time}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editTask(${ind});">Edit</button>
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-danger ms-1" onclick="deleteTask(${ind});">Delete</button>
                </td>  
            </tr>
        `
    }
    let table=`
        <table border="1px" class="table align-middle text-center" style="border-collapse: collapse; width: auto; display: inline-table;">
            <thead>
           <tr><th>#</th><th>Task</th><th>Time</th><th colspan="2">Actions</th></tr>
         </thead>
         <tbody>${trs}</tbody>
        </table>
    `


    let refElem=document.getElementById("ref");
    refElem.innerHTML=table;
}


display();




async function deleteTask(index){
    let task = todoArray[index];
     let id = task.id;
    await axios.delete(`${api}/${id}`);
    todoArray.splice(index,1);
    display();
}


async function addTask(e){
    e.preventDefault();
    let allForms=document.forms;
    let addTaskFormElem = allForms.addTaskForm;
    let taskElem=addTaskFormElem.task;
    let timeElem = addTaskFormElem.time;


    if(taskElem.value==""|| timeElem.value==""){
        alert("please fill all details");
        taskElem.style.border="1px solid red";
        return;
    }
    let obj={
        task:taskElem.value,
        time:timeElem.value
    }
    let res = await axios.post(api, obj);
    

    todoArray.push(obj);
    
    display();
   
    taskElem.value = "";
    timeElem.value = "";

    taskElem.focus();

    alert("added successfully....");
}


let i=0;
function editTask(index){
    i=index;

    //FROM modal of bootstrap
    let taskElem=document.getElementById("task");
    let timeELem=document.getElementById("time");


    //to dispaly the text to edit in the modal pop up
    taskElem.value=todoArray[index].task;
    timeELem.value = todoArray[index].time;
}


async function saveTask(){
    
    //get the data after changing the pop up text
    let taskElem = document.getElementById("task");
    let timeELem = document.getElementById("time");
   
    if (!task || !time) {
    alert("Please fill in all details before saving.");
    return;
  }
    let obj={
        task:taskElem.value,
        time:timeELem.value
    }

    let id = todoArray[i].id;

    let res = await axios.put(`${api}/${id}`, obj);
    todoArray[i]=obj;
    display();
}

