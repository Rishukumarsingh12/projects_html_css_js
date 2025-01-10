const display = document.getElementById('Display')

function AddToDisplay(ele){
    display.value += ele;
}

function Clear(){
    display.value = '';
}

function Calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
    
}