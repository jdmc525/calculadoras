
/****************************************************************************** */
/*=============CALCULADORA DE OPERACIONES FISICA=============*/
/****************************************************************************** */

/*---------OPCIONES FISICA---------*/

let phy_mtrcSelector = document.querySelector('#phy_mtrc-sys-opt');
let phy_typeSelector = document.querySelector('#phy_operation-opt');
let phy_optionsForm = document.querySelector('#phy-main_options-form');
let phy_optionsBtn  = document.querySelector('#phy-options_ok');

let phyPOS_OpExtCont =document.querySelector('.phy-op_external-container-POS');
let phyVEL_OpExtCont =document.querySelector('.phy-vel_ext-cont-main');
let phyACE_OpExtCont =document.querySelector('.phy-ace_ext-cont-main');


let mtrcSelection = "" ;
let mtrcSelectionVel = "" ;
let mtrcSelectionAcc = "" ;

phy_optionsForm.addEventListener('submit', function(event){
    event.preventDefault()
    switch (phy_typeSelector.value) {
        case "Posicion":
            phyPOS_OpExtCont.classList.remove('hide');
            phyVEL_OpExtCont.classList.add('hide');
            phyACE_OpExtCont.classList.add('hide');
        break;
        
        case "Velocidad":
            phyVEL_OpExtCont.classList.remove('hide');
            phyPOS_OpExtCont.classList.add('hide');
            phyACE_OpExtCont.classList.add('hide');
        break;

        case "Aceleracion":
            phyACE_OpExtCont.classList.remove('hide');
            phyPOS_OpExtCont.classList.add('hide');
            phyVEL_OpExtCont.classList.add('hide');
        break;

        default:
            alert('Opcion no valida. Porfavor elija una de las opciones establecidas');
        break;
    }

    if (phy_mtrcSelector.value == "Ingles") {
        mtrcSelectionPos = "pie";
        mtrcSelectionVel = "pie/s";
        mtrcSelectionAce = "pie/s^2"
    }else if(phy_mtrcSelector.value == "Internacional"){
        mtrcSelectionPos = "m";
        mtrcSelectionVel = "m/s";
        mtrcSelectionAce = "m/s^2"
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

    posF_result.innerText = result + " "+ mtrcSelectionPos;

    posF_result.classList.remove('hide');
});



/*---------OPERACION POSICION INICIAL---------*/

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

    posI_result.innerText = result + " "+ mtrcSelectionPos;

    posI_result.classList.remove('hide');
});



/*---------OPERACION VELOCIDAD FINAL---------*/

let velF_VelIn = document.querySelector('#velF_VEL-I');
let velF_ACE  = document.querySelector('#velF_ACE');
let velF_TIME = document.querySelector('#velF_TIME');

let velF_result = document.querySelector('.velF-result');
let op_velF = document.querySelector('#operation-velF');

op_velF.addEventListener('submit', function(event){
    event.preventDefault();
    let velIn = parseFloat(velF_VelIn.value);
    let ace = parseFloat(velF_ACE.value);
    let time = parseFloat(velF_TIME.value);
    let result =  (velIn) + ((ace)*(time));

    velF_result.innerText = result + " "+ mtrcSelectionVel;

    velF_result.classList.remove('hide');
});


/*---------OPERACION VELOCIDAD INICIAL---------*/

let velI_VelFin = document.querySelector('#velI_VEL-F');
let velI_ACE  = document.querySelector('#velI_ACE');
let velI_TIME = document.querySelector('#velI_TIME');

let velI_result = document.querySelector('.velI-result');
let op_velI = document.querySelector('#operation-velI');

op_velI.addEventListener('submit', function(event){
    event.preventDefault();
    let velFin = parseFloat(velI_VelFin.value);
    let ace = parseFloat(velI_ACE.value);
    let time = parseFloat(velI_TIME.value);
    let result =  (velFin) - ((ace)*(time));

    velI_result.innerText = result + " "+ mtrcSelectionVel;

    velI_result.classList.remove('hide');
});



/*---------OPERACION VELOCIDAD INICIAL---------*/

let ace_VelFin = document.querySelector('#ace_VEL-F');
let ace_VelIn  = document.querySelector('#ace_VEL-I');
let ace_TIME = document.querySelector('#ace_TIME');

let ace_result = document.querySelector('.ace-result');
let op_Ace = document.querySelector('#operation-ace');

op_Ace.addEventListener('submit', function(event){
    event.preventDefault();
    let velFin = parseFloat(ace_VelFin.value);
    let velIn = parseFloat(ace_VelIn.value);
    let time = parseFloat(ace_TIME.value);
    let result =  ((velFin) - (velIn)) / (time);

    ace_result.innerText = result + " "+ mtrcSelectionAce;

    ace_result.classList.remove('hide');
});