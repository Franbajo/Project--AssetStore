		/*...........Ratón con forma de nave..............*/
		
		$(document).mousemove(function(){
			$('body').css("cursor", "none");
			$("#sigueme").css("left", event.clientX).css("top", event.clientY);
		});
