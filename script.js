let event1 = document.querySelector(".number-1");
let event2 = document.querySelector(".number-2");
let event3 = document.querySelector(".number-3");
let event4 = document.querySelector(".number-4");
let event5 = document.querySelector(".number-5");
let event6 = document.querySelector(".number-6");
let event7 = document.querySelector(".number-7");
let event8 = document.querySelector(".number-8");
let event9= document.querySelector(".number-9");
let event0= document.querySelector(".number-9");

let eventDot= document.querySelector(".dot-symb");
let eventPercentage = document.querySelector("percentage-symb");

let eventPlus= document.querySelector(".plus-sign");
let eventMinus= document.querySelector(".minus-sign");
let eventMultip = document.querySelector(".multip-sign");
let eventDiv= document.querySelector(".divide-sign");
let eventEqual= document.querySelector(".equal-sign");

let miscTxt = document.querySelector(".simple-calc_container-misc-txt");

const number1 = 1; 
const number2 = 2;
const number3 = 3;
const number4 = 4;
const number5 = 5;
const number6 = 6;
const number7 = 7;
const number8 = 8;
const number9=  9;
const dot = ".";
const percentage = "%";

const division = "/";
const multip = "*";
const minus = "-";
const plus = "+";

let toggleDisplay = 0;

let result = document.querySelector(".simple-calc_screen-result");
let numberBefore = document.querySelector(".simple-calc_screen-before");
let screenSign = document.querySelector(".simple-calc_screen-sign");
let numberAfter = document.querySelector(".simple-calc_screen-after");

let screenContainer = document.querySelector('.simple-calc_container-screen');

//Variable para detectar si es una suma, resta division o multiplicacion
let validation = 0;


/* FUNCIONES PARA DETECTAR TIPO DE OPERACION
    SUMA = 1
    RESTA= 2
    MULTIPLICACION = 3
    DIVISION = 4
 */

function sumValidation(){
    validation = 1;
    return validation
}
function restValidation(){
    validation = 2;
    return validation
}

function multipValidation(){
    validation = 3;
    return validation
}

function diviValidation(){
    validation = 4;
    return validation
}

let numPerc = "";

function perc() {
    if (toggleDisplay == 1 && numberAfter.innerText != "") {
        numPerc = parseFloat(numberAfter.innerText);
        numPerc = numPerc * 0.01;  
        return numPerc;  
    }else{
        eraseAll();
    }
}



/*Funcion para ejecutar la operacion al presionar el igual*/

function equal(validation){
    let num1;
    let num2;
    
    
    if (result.innerText != "") {
        numberBefore.innerText = result.innerText;                
    }

    if (numPerc != "") {
        num1 = parseFloat( numberBefore.innerText) ;
        num2 = numPerc;      
    }else{
        num1 = parseFloat( numberBefore.innerText) ;
        num2 = parseFloat(numberAfter.innerText);
    }

    

    switch (validation) {
        case 1:
            miscTxt.innerText = "math is cool";

            result.innerText = num1 + num2; 
            eraseAll_notResult();  
            maxText();
            result.classList.remove('hide')    
            
            
            break;
    
        case 2:
            miscTxt.innerText = "math is cool";
        
            result.innerText = num1 - num2;
            eraseAll_notResult();
            maxText();
            result.classList.remove('hide')    

            break;
        
        case 3:
            miscTxt.innerText = "math is cool";

            result.innerText = num1 * num2;
            eraseAll_notResult();
            maxText();
            result.classList.remove('hide')    

            break;
        
        case 4: 
            miscTxt.innerText = "math is cool";

            result.innerText = num1/num2;
            eraseAll_notResult();
            maxText();
            result.classList.remove('hide')    

            break;

        default:
            break;
    }
}




/*Funcion para mostrar numeros en pantalla*/
function display_element(event, number){
    
    if (number == plus || number == minus || number == multip || number == division  ) {
        screenSign.innerText = number;
        toggleDisplay = 1;
        miscTxt.innerText = "math is cool";


        
    }else if (toggleDisplay == 1) {
        if (numberAfter.innerText.length == 10) {  /*Condicion para establecer maximo de characteres en pantalla de calc */
            toggleDisplay =2;
        }
        numberAfter.innerText = numberAfter.innerText + number;
        

    }else if(toggleDisplay == 0){
        result.classList.add('hide')
        
        if (numberBefore.innerText.length == 10) {
            toggleDisplay = 2;
        }else{
        numberBefore.innerText = numberBefore.innerText + number;
        }    
    }else{        
        miscTxt.innerText = "Cantidad maxima de numeros alcanzada";
        
    }

    
}


/*Funcion de borrar (CE) */
function eraseAll(){
    result.innerText = "";
    numberBefore.innerText = "";
    screenSign.innerText = "";
    num1= "";
    numberAfter.innerText = "";
    num2 = "";
    toggleDisplay = false;
    miscTxt.innerText = "math is cool";
}

function eraseAll_notResult(){
    numberBefore.innerText = "";
    screenSign.innerText = "";
    num1= "";
    numberAfter.innerText = "";
    num2 = "";
    toggleDisplay = false;
}


/*Funcion para limite de caracteres en result*/

function maxText() {
    if (result.innerText.length > 15) {
        result.innerText =  result.innerText.substr(0,10);
    }
}




