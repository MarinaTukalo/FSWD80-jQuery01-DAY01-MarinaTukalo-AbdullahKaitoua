

var myItems = [];
var myDivs = $("#sidebar > ul");
 

    myItems.push( '<li><a href="#">New Templates</a><li>' );
    myItems.push( '<li><a href="#">Order Template</a><li>' );
    myItems.push( '<li><a href="#">Contact Us</a><li>' );




 
myDivs.append( myItems.join( "" ) );


$('a[href]').attr("href","http://www.codefactory.wien/");
$("code").css("color","red");
$("blockquote").css({"background-color":"orange","font-style":"italic"});
$("ol > li").css("background-color","#2a7b90");
$("#logo").css("color","black");
$(".grey").css("color","white");
$(".date").remove();
$("textarea").text("Express your opinion");
$("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
$("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
