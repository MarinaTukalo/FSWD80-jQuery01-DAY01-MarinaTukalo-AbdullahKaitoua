$(":input").val("search for");

$("form").submit(function(e) {

	//$("form").remove();

var myItems = [];
var myDivs = $( "article" );
 
for ( var i = 0; i < 5; i++ ) {
    myItems.push( "<div>item " + i +"<span></span></div>" );
}



 
myDivs.append( myItems.join( "" ) );


	$("div")
	.attr( "id", function( arr ) {
    return "id" + arr;
	  })
	  .each(function() {
	    $( "span", this ).html( "('<b>" + this.id + "</b>')" );
	});

		$("div").addClass( "box");



	e.preventDefault();
	
	
	

});


$('a[href]').attr("href","http://www.google.com/").text("Google");