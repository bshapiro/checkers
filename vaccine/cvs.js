// Note: Run this script from the page on which you normally check for CVS vaccine availability in your state. 
// Replace 'MD' with the state relevant to your needs.
javascript:document.getElementsByTagName("body")[0].innerHTML = "<iframe id=\"testFrame\" src=\""+window.location.toString()+"\" style=\"position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;\"><\/iframe>";
reloadTimer = setInterval(
	function() {
		document.getElementById("testFrame").src=document.getElementById("testFrame").src;
		setTimeout(
			function() {
				document.getElementById("testFrame").contentWindow.document.querySelector('a[data-modal="vaccineinfo-MD"]').click();
				setTimeout(
					function() {
						if (!document.getElementById("testFrame").contentWindow.document.getElementById('vaccineinfo-MD').querySelector(".covid-status").querySelectorAll("tr")[1].querySelectorAll("td")[1].innerText.includes("Fully Booked")) {
							var context = new AudioContext();
							var o = context.createOscillator();
							var g = context.createGain();
							o.connect(g);
							g.connect(context.destination);
							o.start(0);
							console.log("Error page not displayed.")}
						}, 5000);
			}, 10000);
	}, 60000);