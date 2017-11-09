/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


var options = document.querySelector('#options');
var button = document.querySelector('button');
//hiermee spreekhow je de div aan 

function show() {
    options.classList.toggle('show');
}

//Kijken welke classes options heeft ( in lijst) 
//toggle = aan uit zetten van class.


button.addEventListener('click', function(event) {
    event.preventDefault();
//    Vergeet wat je 'default' zou doen en voer hide() uit
    show();
});

//als je klikt dan display none, maar moet display none zijn sowieso en als je klikt moet hij verschijnen


//---------------------------------
//ZELF OPSLAAn WERKT

console.log('opslaan');
var opslaan = document.querySelector('#opslaan');
var opslaan = document.getElementById('opslaan');
var opslaan = document.getElementById('opslaan').getAttribute('src', 'assets/image/opslaan_icon.png');
var opslaan = document.querySelector('img');

function OpslaanZichtbaar() {
    opslaan.classList.toggle('OpslaanZichtbaar');
}

opslaan.addEventListener('click', function(event) {
    event.preventDefault();
//    Vergeet wat je 'default' zou doen en voer hide() uit
    OpslaanZichtbaar();
});

var opslaan = document.getElementById('opslaan');

opslaan.addEventListener('click', function(event) {
	event.preventDefault();
	OpslaanZichtbaar();
});

//VOOR VERANDEREN KLEUR BACKGROUND IMAGE BIJ TOGGLE CLASS TOEVOEGEN EN LINKEN NAAR ANDER PLAATJE

//-------//Loading state--------------

//download.addEventListener('click', open);





var gif = document.querySelector('[src="assets/image/loading.gif"]');
var download = document.querySelector('[src="assets/image/download_icon.png"]');

 function laden () {

	download.classList.toggle('laden');
}


download.addEventListener('click', function(event) {
event.preventDefault();
laden();
});


function changeimage() {
    document.getElementById("download").src = "assets/image/loading.gif";
}



//------------------------------------------------------

//var el = document.getElementById('opslaan').getAttribute('src');
 
//el = document.getElementById('opslaan').setAttribute('src', 'image/sterUit.png');
 
//function changeimage(){
     
  //  var huidig = document.getElementById('opslaan').getAttribute('src');

    //if (huidig == 'image/sterUit.png'){
         
      //  el = document.getElementById('ster').setAttribute('src', 'image/sterAan.png');
         
    //} else {
    //    el = document.getElementById('ster').setAttribute('src', 'image/sterUit.png');
   // }

//}
//var bestand = document.getElementById('ster');
//bestand.addEventListener('click', changeimage , false);


//---------------------


