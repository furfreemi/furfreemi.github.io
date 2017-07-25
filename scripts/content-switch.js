$(document).ready(function() {
	function setDisplay(id, display){
		document.getElementById(id).style.display = display;
	}

	function setText(text){
		document.getElementById("main-text").innerHTML = text;
	}

	$("body").click(function(e) {
    	var target = $(e.target).attr("id");

    	if (target == "menu" || target == "menu-text"){
	    	setDisplay("header", "none");
			setDisplay("main", "inline");
			setDisplay("main-text", "block");
	    	setText("test yay");
	    } else if (target != "main" && target != "main-text") {
	        setDisplay("header", "inline");
			setDisplay("main", "none");
			setDisplay("main-text", "none");
	    }
	});

});