console.log("BOARD JS")

function init(){
    showGrName()
    cleanAllColumns();
    showTasks()
    //showTaskOnBoard()
}





async function showTasks(){

  //DB
  let response = await   getGroupDataFromDB()
  let tasks = Object.values(response.tasks);
 
  //SHOW TODO
  let todoTasks = filterByStage(tasks,"todo")
  filterByUrgency(todoTasks)
  gernarateTasks(todoTasks,"todo")
  
  //SHOW INPROGRESS
  let inprogressTasks = filterByStage(tasks,"inprogress")
  filterByUrgency(inprogressTasks)
  gernarateTasks(inprogressTasks,"inprogress")

  //SHOW TESTING
  let testingTasks = filterByStage(tasks,"testing")
  filterByUrgency(testingTasks)
  gernarateTasks(testingTasks,"testing")

  //SHOW DONE
  let doneTasks = filterByStage(tasks,"done")
  filterByUrgency(doneTasks) 
  gernarateTasks(doneTasks,"done")

}

function gernarateTasks(tasks,columName){
  for(let i=0;i<tasks.length;i++){
    let boardColumn = document.querySelector(`.${columName}`)
        boardColumn.innerHTML += `
        <div class="single-task" draggable="true" id="${tasks[i].id}" ondragstart="rememberDragedItem(${tasks[i].id})">
          ${tasks[i].title}
       ${tasks[i].urgency}
          <p class="material-symbols-outlined" onclick="deleteItem(${tasks[i].id})">delete</p>
          </div>
        `
  }
}

function filterByStage(inputs,stage){
return inputs.filter(input => input.stage == stage)
}

 

function filterByUrgency(input){
  input.sort(function (a, b){
    if( a.urgency > b.urgency){
      return 1;
    }else{
      return -1;
    }
});
return input
}




function cleanAllColumns(){
    let allColumns = document.querySelectorAll(".column-body")
    for(const column of allColumns ){
        column.innerHTML = ""
        }
}

function deleteItem(id){
  changeStage(id,"trash")
  init()
}


 const mycolumns = document.querySelectorAll('.column-body')
 
 for(const mycolumn of mycolumns ){
    
// Need to for moving
 mycolumn.addEventListener('dragover', dragOver);
 mycolumn.addEventListener('drop', drop);

 //for styling
 mycolumn.addEventListener('dragenter', dragEnter);
 mycolumn.addEventListener('dragleave', dragLeave);


 }





let dragged;

function rememberDragedItem(id){
    dragged = id;
}

 function dragOver(e){
   e.preventDefault()
 }
 
 
 
 function drop(){
  let  targetedContainer = this.id
  
  changeStage(dragged,targetedContainer)
  init()

 }


 function dragEnter(){
   // console.log(" dragEnter")
 }
 
 
 function dragLeave(){
   // console.log(" dragLeave")
 }
 
 
