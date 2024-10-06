const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function PlusorMinus(){
    let display = document.getElementById('display');
    let current = display.value;
    if (current !== '') {
        // Toggle the sign by multiplying the value by -1
        if(current.startsWith('+')){
            display.value = '-' + current;
        }else{
            display.value = current.slice(1);
        }
    }
}
function clearBackspace(){
    display.value = display.value.slice(0,-1);
}
document.addEventListener('keydown',function(event) {
    if(event.key === 'IMG'){
        clearBackspace();
        event.preventDefault();
    }
})
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        let exp = display.value.replace(/x/g, '*');
        display.value = eval(exp);
         // If user enters 4+ , then it is not complete for evaluate the expression,
        // so, it throws error thats why we use try block
    }catch(error){
        display.value = "Error";
    }
}