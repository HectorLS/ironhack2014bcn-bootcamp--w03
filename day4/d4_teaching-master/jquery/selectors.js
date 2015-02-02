$(document).ready(function () {

// Put a border in the following elements

// all the elements: Example
    // var liElements = $("li");
    // $("*").css("border", "solid 1px");

// the div with the id of myContent
    // $("#myContent").css({"border": "2px solid red"});

// li elements
 	// $("li").css({"border": "2px solid cyan"});

// li with the basic class
    //$("li.basic").css({"border": "2px solid red"});


// The first li element with css selectors
	// $("li:first").css({"border": "2px solid red"});

// The second li element with traversing filters
 	$("li").eq(1).css({"border": "2px solid red"});

// The last p with css selectors
	 //$("p:last").css({"border": "2px solid red"});

// The last p with traversing filters
	 //$("p").eq(-1).css({"border": "2px solid red"});     // -1 toma el último elemento (útil si no sabes el número exacto de ellos)


// The label element that has an element with the id love
     //$("label").has("#love").css({"border": "2px solid red"});

// The li element that has no new class
		// $("li").not(".new").css({"border": "2px solid green"});    // Awesome !!

// The a element with href property is 'http://www.api.jquery.com/'
		//$('a[href="http://www.api.jquery.com/"]').css({"border": "2px solid cyan"});

// The a element with href property starts by http://www.
		// $('a[href^="http://www."').css({"border": "2px solid purple"});   //No cierro el corchete porque no está completa la propiedad IMPORTANTE

// The a element with href property contains api
		//$('a[href*="api"').css({"border": "2px solid black"});

// The p elements
		//$("p").css("border", "solid 5px green");
// The p elements inside myContent div
		//$("#myContent p").css("border", "solid 5px black");  
// The parent element to the jquery-ui element
		//$("#jquery-ui").parent().css("border", "solid 5px green");       !!Genial

// The siblings to the slogan p
		//$("p#slogan").siblings().css("border", "solid 5px green");
// The p elements not inside myContent div
		//$("div").not("#myContent").children("p").css("border", "solid 5px red");
// The li elements that starts with jQuery. Tip: http://www.w3schools.com/jsref/jsref_substring.asp


$("li").filter(function(){
	return $(this).text().substring(0,6) == 'jQuery';
}).css("border", "solid 1px");




});



// siblings = hermanos en el html 