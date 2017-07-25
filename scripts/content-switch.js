$(document).ready(function() {
	var bg = "Hi! My name is Larissa. I'm currently a student at Case Western Reserve University living in the awesome Cleveland, OH. \
					I'm slated to graduate in January, and am currently seeking a full time position somewhere in the computing industry. \
					<br><br> \
					I study computer and biomedical engineering, with the intention of going into software engineering. \
					I'm particularly interested in software related to the medical or healthcare fields. \
					<br><br> \
					The past two years, I've interned at a software company working on mobile applications for use in the emergency department, \
					both physician-facing and patient-facing. The previous year, I did a 6-month co-op term at a medical imaging company, on their \
					infrastructure team. \
					<br><br> \
					During the school year, I'm a teaching assistant for Case Western's Java and Matlab courses. I've also been involved with the robotics team \
					since my freshman year, competing in the NASA Robotic Mining Competition as both a general body member and exec board member. \
					I serve as a peer mentor with the Women in Science and Engineering Roundtable (WISER), working with younger undergraduate students interested in pursuing \
					an electrical or computer engineering degree at CWRU. \
					<br><br> \
					I've had the opportunity to work with many programming languages, such as Java, Objective-C, Python, Ruby, HTML/CSS, C, and Verilog, \
					as well as other tools including Matlab, Git, Subversion, Blender, PhotoShop, and SolidWorks.";



	var contact = 'Feel free to reach out or check out any of my profiles:<br><br>\
					<a href="mailto:larissa.marcich@gmail.com" target="blank"><img src="./images/icons/mail.png" height="44px"/></a>\
					<a href="https://www.linkedin.com/in/larissamarcich" target="blank"><img src="./images/branded_icons/linkedin.png" height="44px"/></a>\
					<a href="https://www.pinterest.com/lmarcich/" target="blank"><img src="./images/branded_icons/pinterest.png" height="44px"/></a>\
					<a href="https://github.com/furfreemi" target="blank"><img src="./images/branded_icons/github.png" height="44px"/></a>'


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
	    	setText(bg);
	    } else if (target != "main" && target != "main-text") {
	        setDisplay("header", "inline");
			setDisplay("main", "none");
			setDisplay("main-text", "none");
	    }
	});

});