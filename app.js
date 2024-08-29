const display = document.getElementById("display")
// function qoshishga 
function appendDisplay(input) {
    display.value += input;
}

// function tozalashga 

function clearDisplay() {
    display.value = ""
}

// calculetga function

function calculet() {
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}




































