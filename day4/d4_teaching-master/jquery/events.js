$(document).ready(function () {

// When the page is loaded replace the slogan by "Bazinga!"
$("#slogan").text("Bazinga!");

// When you click on the input to write my name the previous name is deleted
// Pedir datos del evento con el argumento, y luego en este caso event.target para saber a quien se le aplica
// var myFunction = function (event){$(this).val(event.target); console.log(event)}
// $("#name").bind("click", myFunction);

// var myFunction = function (){$(this).val("");}
// $("#name").bind("click", myFunction);



// When you move your mouse over one jQuery projects it change the background-color to silver
// var bgColor = function(){$(this).css("background-color","silver")}
// var bgColorLeave = function(){$(this).css("background-color","transparent")}

// $("#myContent").bind("mouseenter", bgColor).bind("mouseleave", bgColorLeave);

//Mouse Over genera un evento por cada hijo dentro del contenedor del evento, por lo tanto
// es recomendable usar Mouse Enter en su lugar

// With the previous one active, when the user leaves the element remove the background-color
//Hecho encima



// Only when the mouse is over one jQuery project has the bordered class"

// var bgColor = function(){$(this).css(styleEnter)}
// var bgColorLeave = function(){$(this).css(styleLeave)}
// var styleEnter = {
// 	"background-color": "silver",
// 	"border" : "3px solid red"
// 	};
// var styleLeave = {
// 	"background-color": "silver",
// 	"border" : "0"
// 	};
// $("#myContent").bind("mouseenter", bgColor).bind("mouseleave", bgColorLeave);

// -------------------

// var addBorder = function(){$(this).addClass("bordered");};
// var removeBorder = function(){$(this).removeClass("bordered");};

// $("#myContent li").bind("mouseenter", addBorder).bind("mouseleave", removeBorder);


// When I finish to write my name I want my name written in the result div

//------- ONE WAY ---------
	// $("#name").blur(function(){
	// 	$("#result").text($(this).val());
	// });

//------- ANOTHER WAY ---------

	// $("#name").blur(function(){
	// 	var name = $("#name").prop("value");
	// 	$("#result").text(name);
	// });

// When I click on any element of the body show the mouse x and y in the result div

// var misCoordenadas = function(event){ 
// 	$("#result").html( 'X: '+ event.pageX + '<br />Y: ' + event.pageY ) 
// };

// $("body").bind("click", misCoordenadas);

// Adds a div with "Hello" at the end of the body when you click on the result div

// var nuevoDiv = function(){
// 	$("body").append( "<div> Hello </div>")
// };


// $("#result").bind("click", nuevoDiv);


// Adds a div with "Hello" when you click on the result div only the first time

//----------- one ------------------------
// var nuevoDiv = function(){
// 	$("body").append( "<div> Hello </div>");
// };
// $("#result").one("click", nuevoDiv);
//  --------- Usando el BIND --------------

	// var nuevoDiv = function(){
	// 	$("body").append( "<div> Hello </div>");
	// 	$(this).unbind("click");
	// };
	// $("#result").bind("click", nuevoDiv);


// Adds a new "jQueryUI" element when clicks over one jQuery project

// var addingNewLi = function(){
// 	var clonator = $("#myContent li").eq(1).clone();
// 	$(this).parent().append(clonator);
// }; 

//  $("#myContent li").bind("click", addingNewLi);


// Avoid the navigation when you click a link

	// var blockNav = function(){return false;};
	// $("a").bind("click", blockNav);

	// var blockNav = function(e){e.preventDefault();};
	// $("a").bind("click", blockNav);


// When you click a link go to ironhack.com
// var myurl = "//ironhack.com";
// var redirigir = function(){$(this).attr("href", myurl);};
// 	$("a").bind("click", redirigir);

// When you click on myContent div toggle the class bordered to the result
// except if jquery-ui element is clicked.

// var toggleResult = function (){
// 	$("#result").toggleClass("bordered")
// };
// $("#myContent").bind("click", toggleResult);


// function bloqueo(e){e.stopPropagation()}
// $("li#jquery-ui").bind("click", bloqueo);



// When you select a part of the input name the selected part is shown in the result div

var encontrarElTexto = function(e){

	var elTexto = e.target;
	console.log(elTexto);

	var textoSelecionado = elTexto.substring(0,-1)


}

$("#name").select(encontrarElTexto).





    /**
     * Final round
     */
// Duplicate the jQuery projects when clicks over them

// When you uncheck "I love learning" you get an alert with "Really???"

// When you resize the page show the size in the result div

// I want the result div follows my mouse until I click (then will be fixed on the page)
// The mouse should be in the center of the div

});



// El primer ejercicio si no tuviésemos la línea uno declarada
// var myEvent = function(){
// 	$("#slogan").text("Bazinga!")
// }
// $(document).ready(myEvent);