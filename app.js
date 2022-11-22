var inputs = document.querySelector(".en-list");
const addBtn = document.querySelector(".add-list");
const tasks = document.querySelector(".todotasks");
const fileroption=document.querySelector(".filter-todo");
//const dateElement=document.getElementById(".date");

addBtn.addEventListener('click',addtodo);
fileroption.addEventListener('click',todofiler);





//add btn
inputs.addEventListener('keyup',()=>{
    if(inputs.value.trim() != 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})
//add neew iten
//addBtn.addEventListener('click', () =>
function addtodo (event) {
    event.preventDefault();
    if(inputs.value.trim() != 0){
        const tododiv = document.createElement('div');
        tododiv.classList.add('item');
        //create input
        const newtodo=document.createElement('h3');
        newtodo.innerText = inputs.value;//gian bien nhap vao sang intext
        newtodo.classList.add("completed");
        tododiv.appendChild(newtodo);
        //create button delete and edit
        const newItem=document.createElement('button');
        newItem.classList.add('item-btn1');
        newItem.innerHTML = '<div class="item-btn"><i class="fa-solid fa-pen-to-square "></i> <i class="fa-sharp fa-solid fa-xmark"></i></div>';
        tododiv.appendChild(newItem);
        tasks.appendChild(tododiv);
         inputs.value='';
         
    }else{
        alert('what do you do');
    }
}
  //delete
    tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
})
//edit
     tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.parentElement.classList.toggle('completed');
       
    }
})
//chú ý: lỗi đả sữa ko đc để khoảng trong giữa các thẻ trong html
function todofiler(e){
    const todos=tasks.childNodes;
    todos.forEach(function(item){
        switch(e.target.value){
            case "all":
                item.style.display="flex";
                break;
            case "completed":
            if(item.classList.contains("completed")){
                item.style.display="flex";
            }
            else{
                item.style.display="none";
            }
            break;
            case "uncompleted":
                if(!item.classList.contains("completed")){
                    item.style.display="flex";
                }
                else{
                    item.style.display="none";
                }
                break;
        }
     })   ;      
    
}

