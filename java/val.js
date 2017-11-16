$(document).ready(function(){

	$("#submit").click(function(){
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		var email = $("#email").val();
		var password = $("#passcode").val();

		if(firstname == ""){

			$("#span-head").text("All Fields Are Required");
			$("#firstname").focus();

			return false
		}else if(firstname == ""){

			$("#span-one").text("please enter your firstname");
			$("#firstname").focus();

			return false
		}else if(lastname == ""){

			$("#span-two").text("please enter your lastname");
			$("#lastname").focus();

			return false
		}else if(email == ""){

			$("#span-three").text("please enter your email");
			$("#email").focus();

			return false
		}else if(password == ""){

			$("#span-four").text("please enter your password");
			$("#passcode").focus();

			return false
		}


	});

	$("input").focus(function(){
		$(this).css("background-color", "#cde")
	});

	$("input").blur(function(){
		$(this).css("background-color" , "")

	});
	

})