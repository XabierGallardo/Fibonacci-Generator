// Initial Fibonacci's array
let fibonacci = [0,1];


// Clear button
$("#clear").click(function() {
	$("#numbers").html("");
	fibonacci = [0,1]; //Reset initial values
});

// Generate button
$("#generate").click(startSequence);


// Fibonacci generator
function startSequence () {

if ($("#sequences").val() <= 0) {

	$("#numbers").html("Invalid number");

} else {

	for (let i = 0; i < $("#sequences").val(); i++) {

	    let a = fibonacci[fibonacci.length - 2];
	    let b = fibonacci[fibonacci.length - 1];
	    let c = a + b;
	    fibonacci.push(c);
  	}

  	$("#numbers").html(fibonacci.join(" "));

	}
}