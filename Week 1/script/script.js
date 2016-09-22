document.addEventListener("DOMContentLoaded", function () {

	console.log("Hey, This is Rosa homework");

	

	var div2 = document.getElementById("div2");
	div2.style.backgroundColor = "#94DEE1";

	var div3 = document.getElementById("div3");
	div3.style.backgroundColor = "#F18CB4";

	var p = document.getElementsByClassName("parent");
	p[0].style.backgroundColor = "white";


	var degree = 0;
	var rotateDiv = function (){
		degree = degree + 0.5;
		p[0].style.transform = "rotate(" + degree + "deg)";
	};

	window.setInterval(rotateDiv, 2);
});

