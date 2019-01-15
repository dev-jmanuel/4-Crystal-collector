// document.ready
$(document).ready(function() {

// Variables
    var wins = 0; 
        console.log("Wins: " + wins);
        $("#wins").html("<h1>Wins: </h1>" + wins);  

    var losses = 0; 
        console.log("Losses: " + losses);
        $("#losses").html("<h1>Losses: </h1>" + losses);  

    var valueCurrent = 0; 
        console.log("Current value: " + valueCurrent); 
        $("#valueCurrent").html("<h1>Current value: </h1>" + valueCurrent); 

// Variables w/ random values        
	var valueTarget = Math.floor(Math.random() * 80) + 30; 
		console.log("valueTarget: " + valueTarget); 
		$("#valueTarget").html("<h1>Value limit: </h1>" + valueTarget); 

	var blue = Math.floor(Math.random() * 9) + 5; 
		console.log("Blue: " + blue); 
		
	var green = Math.floor(Math.random() * 5) + 1; 
        console.log("Green: " + green);  
		
    var red = Math.floor(Math.random() * 12) + 9; 
		console.log("Red: " + red); 
		
    var gold = Math.floor(Math.random() * 18) + 12; 
		console.log("Gold: " + gold); 

// newRound function
	function newRound () {
		valueTarget = Math.floor(Math.random() * 102) + 19; 
		console.log("valueTarget: " + valueTarget); 
		$("#valueTarget").html("<h1>Value limit: </h1>" + valueTarget);  

		valueCurrent = 0; 
		$("#valueCurrent").html("<h1>Current value: </h1>" + valueCurrent); 

		blue = Math.floor(Math.random() * 9) + 5; 
		console.log("Blue: " + blue); 
	
		green = Math.floor(Math.random() * 5) + 1; 
        console.log("Green: " + green);  
		
    	red = Math.floor(Math.random() * 12) + 9; 
		console.log("Red: " + red); 
		
    	gold = Math.floor(Math.random() * 18) + 12; 
		console.log("Gold: " + gold); 


// Button functions
		$("#blue").on("click", function () {
			var valueCurrent = valueCurrent + blue; 
			console.log("Current Value: " + valueCurrent); 
			$("#valueCurrent").html("<h1>Current value: </h1>" + valueCurrent); 

// win and lose if else statement
			if(valueCurrent === valueTarget) { 
				wins++ ; 
				$("#wins").html("<h1>Wins: </h1>" + wins); 
                console.log("Wins: " + wins); 
                newRound(); 
			} else

			 if(valueCurrent > valueTarget) {
				losses++ ; 
				$("#losses").html("<h1>Losses: </h1>" + losses); 
                console.log("Losses: " + losses); 
                newRound(); 
				
			}
		}); 
	}



// Initial round game functions
	$("button").on("click", function () {
		var valueCurrent = valueCurrent += parseInt($(this).attr("value")); 
        console.log("Current Value: " + valueCurrent); 
		$("#valueCurrent").html("<h1>Current value: </h1>" + valueCurrent); 

		if(valueCurrent === valueTarget) { 
			wins++ ; 
			$("#wins").html("<h1>Wins: </h1>" + wins); 
            console.log("Wins: " + wins); 
            newRound(); 
		} 

		else if(valueCurrent > valueTarget) {
			losses++ ; 
			$("#losses").html("<h1>Losses: </h1>" + losses); 
            console.log("Losses: " + losses); 
            newRound(); 
		}
    }); 
}); 