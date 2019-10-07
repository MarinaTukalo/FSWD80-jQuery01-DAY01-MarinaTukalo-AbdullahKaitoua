


	            var div = $('#main');     // The parent <div>.
	            var myItems = [];



			  for (var i =0;i< items.length ; i++) {

          myItems.push( "<div>" + items[i].name+' '+items[i].price +' '+items[i].status +"</div>" );
          myItems.push( "<div ><img src="+items[i].image+" ></img></div>" );
          

          

			    /*var divLeft = document.createElement('div');
			                divLeft.innerHTML = teamMembers[i].name + '<br>' + teamMembers[i].email;

      			var img = document.createElement('img');    // Create an <img> element.
                img.src = teamMembers[i].image;                // The image source from JSON array.


                var divRight = document.createElement('div');
                divRight.setAttribute('style', 'border-left: solid 1px #ddd;');
                divRight.appendChild(img);

               
               
                // Add the child DIVs to parent DIV.
                div.appendChild(divLeft);
                div.appendChild(divRight);*/



                 
             

   
  }

      div.append( myItems.join( "" ) );
      $("img").attr("width","200px");



    