$(document).ready(function () {

var SERVER = 'https://vast-earth-2490.herokuapp.com/';



// ---------------- Write New Email -------------------- //

	//Creo una función para ocultar esta ventana ya que vamos a usarlo muchas veces (REFACTORIZA!)
	function ocultarVentana(){
		$("#blank-email").css({"display": "none"});
	}

	function borrarContenido(){
		$("#new_email")[0].reset();
	}


	var newMail = function(){
			
		$("#blank-email").css({"display": "block"});


		// ----- Cerrar ventana ---- //
		$("#blank-close").click(function closeButton(){
			ocultarVentana();
		});


		// ----- Cerrar ventana y borrar contenido ---- //
		$("#trash").click(function trashButton(){
			borrarContenido();
			ocultarVentana();
		});


		// ----- Enviar ---- //
		$("#send").click(function sendButton(){
			// El serialize no puede estar antes de cuando introducimos los datos en el formulario
			// porque sino los recoge como vacíos.
			var dataToSend = $("#new_email").serialize();					
			$.post(SERVER + "email", dataToSend, abrirVentanaEscribirEmail);
			borrarContenido();
			ocultarVentana();
		});
	};

	$("#compose").click(newMail);

		var abrirVentanaEscribirEmail = function (value){
			ocultarVentana();
		};





// ---------------- Read the  Email -------------------- //
	
	var LeerEmail = function(event){


		console.log(event.target);  // Para ver en consola sobre que elemento he hecho click

		$("#readEmail").fadeIn().css({"display": "block"});

		// data("id") para coger el value de data-id="1234" del email seleccionado, 
		//el id debe estar entrecomillado porque es una string
		var idSelected = $(this).data("id");

		var emailsUrl = SERVER + 'email/' + idSelected;

		function extractDatas(data){
			console.log(data);
			$(".fromInside").text(data.from);
			$(".subjectInside").text(data.subject);
			$(".allEmailText").text(data.email);
		};
		$.get(emailsUrl, extractDatas);
	};

	// Con DELEGATE le digo que esta propiedad la tengan no solo los "li" actuales sino TAMBIÉN los nuevos que vengan
	// En lugar de usar 
	// $("#emails li").click(LeerEmail);
	// Abajo lo incluyes con delegate y ya se aplica a los emails futuros

	$("#emails").delegate("li", "click", LeerEmail);





// ---------------- Close the  Email -------------------- //
	$(".closeTheEmail").click(function(){$("#readEmail").css({"display": "none"});});






// ---------------- Check New Email -------------------- //
	
	var revisarEmails = function(){

		var emailsUrl = SERVER + 'email/new';

		function extractDatas(data){
			console.log(data);
			$.each(data, function fuckingHash(emailid, email){
				email == []
				console.log(email);
				$("#emails").prepend(
					'<li data-id="' + data.emailid + '"' + 'class="clearfix">'
						+ '<div class="selectors">'
							+ '<div class="checked" role="checkBox" data-checked="false"></div>'
							+ '<div class="starred" data-starred="true"></div>'
						+ '</div>'
						+ '<div class="contentInfo">'
							+ '<div class="from">' + email.from + '</div>'
							+ '<div class="subject">' + email.subject + '</div>'
							+ '<div class="preview">' + email.preview + '</div>'
						+ '</div>'
					+ '</li>'
				);	
			});
		};
		$.get(emailsUrl, extractDatas);
	};

	$("#check-emails").click(revisarEmails);






// ---------------- Emails's number -------------------- //
	// ------- First Way ------//

	// function showNumbers(){

	// 	var emailNumbUrl = SERVER + 'labels';
	// 	$.get(emailNumbUrl, extractNumbers);
	// 	function extractNumbers(data){
	// 	console.log(data);
	// 	$("#personal-labels .personal--friends").append("(" + data.friends.unread + ")");
	// 	$("#personal-labels .personal--professional").append("(" + data.professional.unread + ")");
	// 	$("#personal-labels .personal--events").append("(" + data.events.unread + ")");
	// 	$("#personal-labels .personal--things").append("(" + data.things.unread + ")");	
	// 	}
	// }
	
 // showNumbers();   //Llamada a la función para que se ejecute



 	// ------- Refactor Way  ------//

 	function showNumbers(){

		var emailNumbUrl = SERVER + 'labels';
		$.get(emailNumbUrl, extractNumbers);
		function extractNumbers(data){
			console.log(data);
			$.each(data, function(labelName, labelObject){
				$("#personal-labels .personal--" + labelName).append("(" + labelObject.unread + ")");
			});
		};
	}
	
 showNumbers();   //Llamada a la función para que se ejecute




// ---------------- Go specified InBox -------------------- //

	function changeInbox(){

		var thisSelected = $(this).prop("id");
		var labelUrl = SERVER + 'labels/' + thisSelected;
		console.log(thisSelected)

		function showInboxSelected(){
			//Uno para borrar y otro para poner
		}


		$.get(labelUrl, showInboxSelected);
	}
	
	$("#personal-labels").delegate("li", "click", changeInbox)




// var LeerEmail = function(event){


// 		console.log(event.target);  // Para ver en consola sobre que elemento he hecho click

// 		$("#readEmail").fadeIn().css({"display": "block"});

// 		// data("id") para coger el value de data-id="1234" del email seleccionado, 
// 		//el id debe estar entrecomillado porque es una string
// 		var idSelected = $(this).data("id");

// 		var emailsUrl = SERVER + 'email/' + idSelected;

// 		function extractDatas(data){
// 			console.log(data);
// 			$(".fromInside").text(data.from);
// 			$(".subjectInside").text(data.subject);
// 			$(".allEmailText").text(data.email);
// 		};
// 		$.get(emailsUrl, extractDatas);
// 	};

// 	// Con DELEGATE le digo que esta propiedad la tengan no solo los "li" actuales sino TAMBIÉN los nuevos que vengan
// 	// En lugar de usar 
// 	// $("#emails li").click(LeerEmail);
// 	// Abajo lo incluyes con delegate y ya se aplica a los emails futuros

// 	$("#emails").delegate("li", "click", LeerEmail);

















// ---------------- Starred -------------------- //
	// ----- Cargar Starred iniciales -----//
	function starredEmails(){

		$(this).data("starred")

		function myFunction (){
			console.log($(this).data("starred") == true);   //Info
			return $(this).data("starred") == true;
		}

		$("#emails .starred").filter(myFunction).css({"background-image": "url(images/star-lit4.png)"});
	}

	 starredEmails(); //Llamada a la función para que se ejecute

	// ----- Cambiar el valor de Starred de un email -----//

	function changeStarredValue(e){
		var starred = $(this).data("starred");
		if (starred == true) {
			$(this).css({"background-image": "url(images/star4.png)"});
		}
		else {
			$(this).css({"background-image": "url(images/star-lit4.png)"});
		}
		$(this).data("starred", !starred);      // MAGIA jaja, esto cambia el valor del data atribbute
		e.stopPropagation()						// a true o false cada vez que clickemos !!
	}

	$("#emails").delegate(".starred", "click", changeStarredValue);






});  // END