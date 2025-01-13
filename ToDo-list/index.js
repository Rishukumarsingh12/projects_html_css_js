

function IsCompleted(checkbox){
    const item = checkbox.parentElement.querySelector(".items");
    if (checkbox.checked){
        item.style.background = "lightgreen";
        item.classList.add("Completed");
    }
    else{
        item.style.background = "white";
        item.classList.remove("Completed");
    }

}

const newbtn = document.createElement('button');
newbtn.textContent = "Add Items";
newbtn.id = "newbtn";
newbtn.className = "button"
newbtn.onclick = AddItems;

document.getElementById('list-container').append(newbtn);


function AddItems(){
    const newItem = document.createElement('div');
    const current = document.getElementById('newbtn');
    
    newItem.className = "list-items";

newItem.innerHTML = `<input type="checkbox" onclick="IsCompleted(this)" class="checkbox"/>
<input type="text" class="items" placeholder="enter items/work" 
     />`;

     document.getElementById('list-container').insertBefore(newItem,current);

}

// Reapply event listeners to include the new item
AddItems();