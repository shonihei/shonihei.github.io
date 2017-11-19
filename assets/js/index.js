$(document).ready(function() {
	var keyframes = createKeyframeAnimation();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = keyframes
	document.getElementsByTagName('head')[0].appendChild(style);
	
	$('.chunk').on('animationend', function(e) {
		if (e.originalEvent.animationName === "pop") {
			$(this).addClass('pulsate');
		}
	});
});

function createKeyframeAnimation () {
	var x = y = 0;
	var animation = '';
	var inverseAnimation = '';
	
	for (var step = 0; step <= 100; step++) {
		var easedStep = exponential(step / 100);
		const xScale = x + (1 - x) * easedStep;
		
		animation += `${step}% {
			transform: scaleX(${xScale});
		}`;
		const invXScale = 1 / xScale;
		inverseAnimation += `${step}% {
			transform: scaleX(${invXScale});
		}`;
	}
	
	return `
	@keyframes activityAnimation {
		${animation}
	}
	
	@keyframes activityContentsAnimation {
		${inverseAnimation}
	}`;
}

function exponential(k) {        
	if (k === 0) return 0;
	if (k === 1) return 1;
	if ((k *= 2) < 1) return 0.5 * Math.pow(1024, k - 1);
	return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
}