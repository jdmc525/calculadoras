
/****************************************************************************** */
/*=============CALCULADORA DE OPERACIONES FISICA=============*/
/****************************************************************************** */

/*---------OPCIONES FISICA---------*/

let phy_mtrcSelector = document.querySelector('#phy_mtrc-sys-opt');
let phy_typeSelector = document.querySelector('#phy_operation-opt');
let phy_optionsForm = document.querySelector('#phy-main_options-form');
let phy_optionsBtn  = document.querySelector('#phy-options_ok');

let phyPOS_OpExtCont =document.querySelector('.phy-pos_external-container');


let mtrcSelection = "" ;

phy_optionsForm.addEventListener('submit', function(event){
    event.preventDefault()
    switch (phy_typeSelector.value) {
        case "Posicion":
            phyPOS_OpExtCont.classList.remove('hide');
        break;
        
        case "Velocidad":
            phyPOS_OpExtCont.classList.remove('hide');
        break;

        case "Aceleracion":
            phyPOS_OpExtCont.classList.remove('hide');
        break;

        default:
        break;
    }

    if (phy_mtrcSelector.value == "Ingles") {
        mtrcSelection = "pie/s";
    }else if(phy_mtrcSelector.value == "Internacional"){
        mtrcSelection = "m/s";
    }


});



/*---------OPERACION POSICION FINAL---------*/

let posF_PosIn = document.querySelector('#posF_POS-IN');
let posF_VelIn = document.querySelector('#posF_VEL-I');
let posF_ACE  = document.querySelector('#posF_ACE');
let posF_TIME = document.querySelector('#posF_TIME');

let posF_result = document.querySelector('.posF-result');
let op_PosF = document.querySelector('#operation-posF');

op_PosF.addEventListener('submit', function(event){
    event.preventDefault();
    let posIn = parseFloat(posF_PosIn.value);
    let velIn = parseFloat(posF_VelIn.value);
    let ace = parseFloat(posF_ACE.value);
    let time = parseFloat(posF_TIME.value);
    let result = (posIn) + (velIn)*(time) + ((0.5)*(ace)*(time)*(time));

    posF_result.innerText = result + " "+ mtrcSelection;

    posF_result.classList.remove('hide');
});



/*---------OPERACION POSICION FINAL---------*/

let posI_PosFin = document.querySelector('#posI_POS-FIN');
let posI_VelIn = document.querySelector('#posI_VEL-I');
let posI_ACE  = document.querySelector('#posI_ACE');
let posI_TIME = document.querySelector('#posI_TIME');

let posI_result = document.querySelector('.posI-result');
let op_PosI = document.querySelector('#operation-posI');

op_PosI.addEventListener('submit', function(event){
    event.preventDefault();
    let posFin = parseFloat(posI_PosFin.value);
    let velIn = parseFloat(posI_VelIn.value);
    let ace = parseFloat(posI_ACE.value);
    let time = parseFloat(posI_TIME.value);
    let result = (posFin) - (velIn)*(time) - ((0.5)*(ace)*(time)*(time));

    posI_result.innerText = result + " "+ mtrcSelection;

    posI_result.classList.remove('hide');
});



