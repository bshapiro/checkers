// This script was designed for periods where Giant vaccine website often produces an error page due to high demand.
// Run this script from the error page to be notified when traffic reduces enough to let you in. 
javascript:document.getElementsByTagName("body")[0].innerHTML = "<iframe id=\"testFrame\" src=\""+window.location.toString()+"\" style=\"position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;\"><\/iframe>";
reloadTimer = setInterval(
	function() {
		document.getElementById("testFrame").src=document.getElementById("testFrame").src;
		setTimeout(
			function() {
				if (!document.getElementById("testFrame").contentWindow.document.getElementById("divApptTypeInfo0").innerText.includes("There are currently no COVID-19 vaccine appointments available")) {
					var context = new AudioContext();
					var o = context.createOscillator();
					var g = context.createGain();
					o.connect(g);
					g.connect(context.destination);
					o.start(0);
					console.log("Error page not displayed.")}
				}, 5000);
	}, 30000);