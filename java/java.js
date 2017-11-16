$(document).ready(function(){
	//this is begining of image gallery
	$("div #img-container").on({
		mouseover : function(){
			$(this).css("cursor", "pointer")
		},
		click : function(){
			var imgsrc = $(this).attr("src");
			$("#first-img")
			.css("border-radius" , "10px")
			.fadeOut(500, function(){
				$(this).attr("src", imgsrc);
			}).fadeIn(500); 
		}
	},".image");
	//this is the end of the image gallery


	//this is add a new list item and remove
	$("#b-one").on('click', function(){
		$('ul').append("<li>Click to Fade Out</li>");
	});

	$('ul').on("click", "li", function(){
		$(this).fadeOut(500);
	});

	$("#first-div").css({
		"color" : "red",
	});

	$("#third-div").on({
		mouseover : function(){
			$(this).css({
				"cursor" : "pointer",
				"border-color" : "red ",
			})
		}

	});

	//this is display welcome message on click
	$("#start").click(function(){
		$("#flip")
		.css("font-size", "1.8em")
		.slideToggle(3000)
	});

	$("#click").click(function(){
		$("#first-header").slideToggle(3000)
	});

	//this is for the sign out
	$("#logout").click(function(){
		alert("You are Signing Out");
	})


	//this wil a simple calculation

	 $("#answer").on({

        mouseover : function(){
            $(this).css({
                "cursor" : "pointer",
                "border-color" : "black",
                "color" : "blue",
            })
        },

         mouseout : function(){
            $(this).css({
                "border-color" : "",
                "color" : "",
            })
        },

        click : function(){
        var firstnumber = parseFloat($("#firstnumber").val());
        var secondnumber = parseFloat($("#secondnumber").val());
        var selectedvalue = $("#select").val();

        if ($("#firstnumber").val() == ""){

            $("#firstnumber").focus();
            return false
        }
        else if ($("#secondnumber").val() == ""){

            $("#secondnumber").focus();
            return false
        }
        else if (selectedvalue == "Addition") {

            var total_addition = firstnumber + secondnumber;

            $("#final").html("This is the answer for adding is : " + total_addition);
        }
        else  if (selectedvalue == "Subtraction") {

            var total_subtraction = firstnumber - secondnumber;

            $("#final").html("This is the answer for Subtracting is : " +  total_subtraction);
        }
        else  if (selectedvalue == "Multiplication") {

            var total_multiplication = firstnumber * secondnumber;

            $("#final").html("This is the answer for Multiplicating is : " +  total_multiplication);
        }
        else  if (selectedvalue == "Division") {

            var total_division = firstnumber / secondnumber;

            $("#final").html("This is the answer for dividing is : " + total_division);
        }
        else if(selectedvalue == "Select Your Option"){

            $("#final").text("Please Select An Option");
        }
      
     }
        
   })
})
