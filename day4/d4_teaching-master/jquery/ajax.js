$(document).ready(function () {

    var SERVER = 'https://calm-dawn-7104.herokuapp.com';
	var r = $("#result");

// Replace myContent content with the result of the request google.html
	var myurl = SERVER + "/google.html";
	$("#myContent").load(myurl);


// Replace the result div when click on it with the response of submitting the content of input text "name" to the /hello/
// Example: If the content is "Luis" you should call '/hello/Luis'

	// var cambiar = function(){
	// 	var nameUrl = SERVER + "/hello/" + $("#name").val();
	// 	$.get(nameUrl, function(mirespuesta){
	// 		r.text(mirespuesta);
	// 	});
	// };
	// r.click(cambiar);


// Replace the result div when click on it when the user changes the amount or the currency
// with the call to /exchange/ with the parameters amount and currency.
// Example: /exchange/?amount=100&currency=euro


	// var currencyChanged = function(){
	// //Tener cuidado con la sintaxis que requiere la url, en este caso es /exchange/?amount=100&currency=euro así que tenemos que crearla
	// 	var moneyUrl = SERVER + "/exchange/?amount=" + $("#amount").val() + "&currency=" + $("#currency option:selected").val();
	// 	$.get(moneyUrl, function(nuevamoneda){
	// 		r.text("euros: " + nuevamoneda.euro);
	// 		console.log(nuevamoneda);
	// 	});
	// };

	// r.click(currencyChanged);

	// //Con keyup podría hacer que me mandase la function currencyChanged cuando suelto el teclado ( tras haber introducido el precio)
	// //Y lo mismo con el cambio de moneda, usange change (cada vez que cambie la moneda)


// Save (POST) the personal form to the /add route when click on the result div
// Look the the AJAX Response and the status code



//El get PUEDE TENER TRES PARÁMETROS 
// var postea = function(){

// 		var formulario = $("#personal").serialize();
//    		// el formulario equivale a un hash {};
//   		$.post(SERVER + "/add", formulario, replaceResultName);
// };


// r.click(postea);

//  var replaceResultName = function (data) {
//         r.html(data);
//     };



// Make a get request to /sleep when click on the result div
// Show loading while the response does not arrive
// Show the result if everything is ok
// Show 'Error' if there is some problem and change the background-color to red
// When the request ends adds the bordered class to the response

	var addBorderedClass = function () {
       r.addClass('bordered');
   	};

	 var loadignScreen = function(){
	 	r.text('Loading...');
       	r.removeClass('bordered');
       	r.css('background-color', 'green');
	 };

	  var showError = function(){
	  	r.text('Error');
       	r.css('background-color', 'red');
	  };


	

var makeRequest = function(){
	loadignScreen();
       var call = $.get(SERVER + "/sleep", replaceName);
       call.error(showError);
       call.complete(addBorderedClass);

};

r.click(makeRequest);

