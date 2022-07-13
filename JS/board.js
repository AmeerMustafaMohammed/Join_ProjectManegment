console.log("BOARD JS")

function init(){
    showGrName()
    showTaskOnBoard()
}



async function showTaskOnBoard(){
    cleanAllColumns();
  let response = await   getGroupDataFromDB()
  let tasks = Object.values(response.tasks);
 for(let i=3;i>=0;i--){
    for(let j=0;j<tasks.length;j++){
      let boardColumn = document.querySelector(`.${tasks[j].stage}`)
        if( tasks[j].urgency == i && boardColumn){
            boardColumn.innerHTML += `
            <div class="single-task" draggable="true" id="${tasks[j].id}" ondragstart="rememberDragedItem(${tasks[j].id})">
              ${tasks[j].title}
           ${tasks[j].urgency}
              <p class="material-symbols-outlined" onclick="deleteItem(${tasks[j].id})">delete</p>
              </div>
            `
        }
    }
 }

}

function cleanAllColumns(){
    let allColumns = document.querySelectorAll(".column-body")
    for(const column of allColumns ){
        column.innerHTML = ""
        }
}

function deleteItem(id){
  changeStage(id,"trash")
  showTaskOnBoard()
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
   showTaskOnBoard()

 }


 function dragEnter(){
   // console.log(" dragEnter")
 }
 
 
 function dragLeave(){
   // console.log(" dragLeave")
 }
 
 
