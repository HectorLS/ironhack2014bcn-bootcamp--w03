$(document).ready(function () {

// Hide the result div
//$("#result").hide(1000, "linear")

// Hide the result div using fade with 1s duration
//$("#result").hide().fadeOut(1000, swing)

// Hide and show the result div using slide
//$("#result").hide(500).show(1000)
//$("#result").slideUp(500).slideDown(1000)

// Hide using slide, wait one second and fade
//$("#result").slideUp().fadeIn()

// Create your own speed and use it
//$.fx.speeds['superman'] = 2000;
//$("#result").fadeOut('superman')

// Set the default animation speed to 2000
// $.fx.speeds['superman'['_default']] = 2000;
// $("#result").fadeOut()

// Slide jquery projects and when it's done show on the result div that it's done
	
	//OneLiner Way
	 // $("#myContent li").slideToggle(function(){
	 // 	$("#result").text("is done")
	 // });

	 //Easy way
	 // var myCallback = function(){$("#result").text("is done")}

	 // $("#myContent li").slideToggle(myCallback);


// .animate({fontSize: "4em"});

// Move to the left in 10 seconds the result div with linear animation
	// $("#result").animate({
	// 	left: "+=50px",
	// 	fontSize: "2em"
	// }, 1000, 'linear');

});
