window.onload = function() {

	var fibonacci = [0,1];
	$("#generate").click(startSequence);
	$("#clear").click(function() {
		$("#numbers").html("");
	});


	function startSequence () {

	if ($("#sequences").val() <= 0) {
		$("#numbers").html("Invalid number");

	} else {

		for (var i = 0; i < $("#sequences").val(); i++) {

		    var a = fibonacci[fibonacci.length - 2];
		    var b = fibonacci[fibonacci.length - 1];
		    var c = a + b;
		    fibonacci.push(c);
	  	}
	  	$("#numbers").html(fibonacci.join(" "));
		}
	}	
}
