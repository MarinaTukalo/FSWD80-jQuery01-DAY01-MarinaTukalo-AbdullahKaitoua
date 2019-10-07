$(document).ready(function(){

	$("form").submit(function(e) {
	e.preventDefault();	});
// Remove the form from the page
	//$("form").remove();

// Create 5 new DIVs in the article element
	for (var i = 1; i < 6; i++) {
	$("article").append('<br><div>test '+ i + '</div>');
	};

// Within the input field change the value to "Search for..."
	$("input#msg").val("Search for...");

// Add a class name of "box" to each new DIV
	$("div").addClass("box");

// Change the link to "www.codefactory.wien"
	$("a[href]").attr("href","www.google.com").text("Google.com");
});