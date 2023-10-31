function addtolist()
{

    var taskname = document.getElementById('taskname').value  //Input element value
    var tododiv = document.getElementById('mytodo')      // access the todo parent element

    var newtodoitem = document.createElement('div') //empty todo element

    var todoname = document.createElement('li')   
    todoname.innerHTML = taskname 
    var deletebtn = document.createElement('i');   //i is nothing but font awesome delete btn
    deletebtn.classList.add('far') 
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)

    tododiv.appendChild(newtodoitem)

}

 var tododiv = document.getElementById('mytodo')
 tododiv.addEventListener('click', deleteitem)

 function deleteitem(e)
{
    const element = e.target
    if(element.classList[0]=='far')
    {
        element.parentElement.remove()
    }
}