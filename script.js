
/****************************************************************************** */
    /*/*=============BARRA DE NAVEGACION Y MENU =============*/
/****************************************************************************** */


let mainMenuButton = document.querySelector(".mainMenuButton");
let menuMainNav = document.querySelector(".menu-main_nav");

function toggleMenu() {
    menuMainNav.classList.toggle("transLeftRightLinear");
        
}



/****************************************************************************** */
                                /*CALCULADORA  SIMPLE */
/****************************************************************************** */

/*---------DECLARACION DE VARIABLES PARA CALCULADORA SIMPLE---------*/ 
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


/*---------FUNCIONES PARA DETECTAR TIPO DE OPERACION---------*/
/*
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


/*---------Funcion para ejecutar operacion con porcentaje---------*/

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



/*---------Funcion para ejecutar la operacion al presionar el igual---------*/

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
            maxText(result);
            result.classList.remove('hide')    
            
            
            break;
    
        case 2:
            miscTxt.innerText = "math is cool";
        
            result.innerText = num1 - num2;
            eraseAll_notResult();
            maxText(result);
            result.classList.remove('hide')    

            break;
        
        case 3:
            miscTxt.innerText = "math is cool";

            result.innerText = num1 * num2;
            eraseAll_notResult();
            maxText(result);
            result.classList.remove('hide')    

            break;
        
        case 4: 
            miscTxt.innerText = "math is cool";

            result.innerText = num1/num2;
            eraseAll_notResult();
            maxText(result);
            result.classList.remove('hide')    

            break;

        default:
            break;
    }
}




/*---------Funcion para mostrar numeros en pantalla Calc Simple---------*/
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


/*---------Funcion de borrar (CE)---------*/
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





/****************************************************************************** */
/*=============CALCULADORA DE CALCULO=============*/
/****************************************************************************** */


/*---------SELECCIONAR OPERACION ---------*/

let calculus_typeSelection = document.querySelector('.calculus_typeSelection')
let derivSelectorButton = document.querySelector('#deriv-selector-img');
let integSelectorButton = document.querySelector('#integ-selector-img');
let calculusOpDeriv = document.querySelector('.calculus_op-deriv');
let calculusOpIntegr = document.querySelector('.calculus_op-integr');

derivSelectorButton.addEventListener('click', opSelectorDeriv);
integSelectorButton.addEventListener('click', opSelectorInteg);

function opSelectorDeriv() {
    calculus_typeSelection.classList.add('hide');
    calculusOpDeriv.classList.remove('hide');
}

function opSelectorInteg() {
    calculus_typeSelection.classList.add('hide');
    calculusOpIntegr.classList.remove('hide'); 
}


/*---------REALIZAR OPERACION DE DERIVADA SIMPLE---------*/

let constant = document.querySelector('#constant');
let escala = document.querySelector('#escala');
let derivResult = document.querySelector(".deriv-result");

let calculusOp = document.querySelector('#calculus-operation-deriv');

calculusOp.addEventListener("submit",  function(event){
    event.preventDefault();
   
    let escala1 = parseInt(escala.value);
    let constante1 = parseInt(constant.value)

    if (constant.value != '' && escala.value != '' ) {
        derivResult.classList.remove('hide');   
        derivResult.innerText = (escala1) * constante1 + "x" + "^" + (escala1 - 1)  ;
        maxText(derivResult);
    }

});

/*---------BORRAR DERIVADA---------*/

let derivReset = document.querySelector('#deriv-reset');

derivReset.addEventListener( 'click', function () {
    resetCalculus(derivResult);
});




/*---------BOTON ATRAS DERIVADA---------*/
let backBtnDeriv = document.querySelector('.back-btn-deriv');

backBtnDeriv.addEventListener('click', function() {
    calculus_typeSelection.classList.remove('hide');
    calculusOpDeriv.classList.add('hide');
});



/*---------REALIZAR OPERACION DE INTEGRAL SIMPLE---------*/

let constIntegr = document.querySelector('#constant-integr');
let integrResult = document.querySelector('.integr-result');
let escIntegr = document.querySelector('#escala-integr');
let calcIntegrBtn = document.querySelector('#calculus-operation-integr');

calcIntegrBtn.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let escIntegrR = parseFloat(escIntegr.value);
    let constIntegrR = parseFloat(constIntegr.value)
    let maxConstStr;
    let maxConstFlt;
    let maxConstSubstr;

    if (escIntegr.value != '' && constIntegr.value != '' ) {
        integrResult.classList.remove('hide'); 
        maxConstFlt = (constIntegrR / (escIntegrR + 1 ))
        maxConstStr = maxConstFlt.toString();
        maxConstSubstr = maxConstStr.substring(0,5);
        integrResult.innerText = maxConstSubstr  + "x" + "^" + (escIntegrR + 1)  ;
        
        maxText(integrResult);
    }
    
});

/*---------BORRAR INTEGRAL---------*/


let integrReset = document.querySelector('#integr-reset');

integrReset.addEventListener( 'click', function () {
    resetCalculus(integrResult);
});




/*---------BOTON ATRAS INTEGRAL---------*/
let backBtnInt = document.querySelector('.back-btn-int');
let calculusOpIntegrCont = document.querySelector('.calculus_op-integr');

backBtnInt.addEventListener('click', function() {
    calculus_typeSelection.classList.remove('hide');
    calculusOpIntegrCont.classList.add('hide');
});









/************************************************************** */
/*=============FUNCION PARA LIMITE DE CARACTERES=============*/
/************************************************************** */
function maxText(resultado) {
    if (resultado.innerText.length > 15) {
        resultado.innerText =  resultado.innerText.substr(0,10);
    }
}


/************************************************************** */
/*=============FUNCION PARA BORRAR CALCULO DE LA SECCION DE CALCULO=============*/
/************************************************************** */


function resetCalculus(operation){
    operation.innerText = "";
    operation.classList.add('hide');   
};