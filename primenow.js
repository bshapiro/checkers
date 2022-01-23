// Note: Run this script from the page on which you normally choose a Prime Now delivery. 
javascript:document.getElementsByTagName("body")[0].innerHTML = "<iframe id=\"testFrame\" src=\""+window.location.toString()+"\" style=\"position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;\"><\/iframe>";
reloadTimer = setInterval(
	function() {
		document.getElementById("testFrame").src=document.getElementById("testFrame").src;
		setTimeout(
			function() {
				if (document.getElementById("testFrame").contentWindow.document.getElementById("delivery-slot-form") == null) {
					var context = new AudioContext();
					var o = context.createOscillator();
					var g = context.createGain();
					o.connect(g);
					g.connect(context.destination);
					o.start(0);
					console.log("Go back to your cart to restart the ordering process. To turn off alert sound, refresh the page.")} 
				else if (!document.getElementById("testFrame").contentWindow.document.getElementById("delivery-slot-form").innerText.includes('No delivery windows available')){
					var context = new AudioContext();
					var o = context.createOscillator();
					var g = context.createGain();
					o.connect(g);
					g.connect(context.destination);
					o.start(0);
					console.log("Delivery window available. To turn off alert sound, refresh the page.")}
				}, 5000);
	}, 60000);
