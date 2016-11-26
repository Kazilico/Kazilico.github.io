$(document).ready(function() {
	setAnchors();

});

function setAnchors() {
	$("nav a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";

			$("html body").animate({
				scrollTop: $("#" + sectionID).offset().top
			}, 1700)

	})
}

(function () {
    var topNode;
    
    window.onscroll = function () {
        var timer;
        (function () {
            clearTimeout(timer);
            timer = setTimeout(
                function() {
                    for(var x = 0 ; x < document.body.offsetWidth ; x++) {
                        topNode =  document.elementFromPoint(x,10);
                        if (topNode.childNodes.length === 1) {
                            return
                        }
                    }
                },
                100
            );
        })();
    }
    
    window.onresize = function () {
        var timer;
        (function () {
            clearTimeout(timer);
            if (topNode) {
                timer = setTimeout(
                    function () { 
                        topNode.scrollIntoView(true); 
                    },
                    10
                );
            }
        })();
    }
})();

/*function expand(element) {
	var target = document.getElementById(element);
	var h = target.offsetHeight;
	var sh= target.scrollHeight;
	var loopTimer = setTimeout('expand(\''+element+'\')',8);
	if(h < sh) {
		h += 15;
	}
	else {
		clearTimeout(loopTimer);
	}
	target.style.height = h+"px";
	//alert("expansion complete");
}

function retract(element) {
	var target = document.getElementById(element);
	var h = target.offsetHeight;
	var loopTimer = setTimeout('retract(\''+element+'\')',8);
	if(h > 0) {
		h -= 15;
	}
	else {
		target.style.height = "0px";
		clearTimeout(loopTimer);
	}
	target.style.height = h+"px";
	alert("retraction complete");
}

$('.work').hover(function() {
	$(this).animate({
		width: '500px'
		height: '300px'
	}, 9000);
}, function() {
	$(this).animate({
		width: '0px'
		height: '0px'
		padding: '0px'
	}, 9000);
});
*/
