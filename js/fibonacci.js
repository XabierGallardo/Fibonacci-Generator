$(function() {
	var fibonacci = [0,1];
	var sequences = $("#sequences").val();

	$("#generate").click(function () {
		alert("test");
		if (sequences <= 0) {
		console.log("invalid number");

		} else {

			for (var i = 0; i<sequences; i++) {

		    var a = fibonacci[fibonacci.length - 2];
		    var b = fibonacci[fibonacci.length - 1];
		    var c = a + b;
		    fibonacci.push(c);
		  	}
		  	$("#generate").html(fibonacci);
		}
	});
});
