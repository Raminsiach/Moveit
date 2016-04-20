var Moveit = {
	getLength: function(el) {
		var tagName = el.nodeName.toLowerCase(),d;
		if(tagName === 'path') {
			d = el.getTotalLength();
		} else if(tagName === 'circle') {
			d = 2 * Math.PI * parseFloat(el.getAttribute('r'));
		} else if(tagName === 'rect') {
			d = 2 * el.getAttribute('width') + 2 * el.getAttribute('height');
		} else if(tagName === 'line') {
			var x1 = el.getAttribute('x1');
			var x2 = el.getAttribute('x2');
			var y1 = el.getAttribute('y1');
			var y2 = el.getAttribute('y2');
			d = Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));
		}
		return d;
	},
	setupPath: function(el, length, start, end) {
		start = parseFloat(start.substring(0, start.indexOf('%')));
		end = parseFloat(end.substring(0, end.indexOf('%')));
		var dash = (end - start);
		var gap = (100 - (end - start));
		var offset = (100 - start);
		el.style.strokeDasharray = ((dash/100) * length) + ' ' + ((gap/100) * length);
		el.style.strokeDashoffset = (offset/100) * length;
	},
	put: function(el, options) {
		var length = this.getLength(el);
		var visibility = (options.visibility) ? options.visibility : 1;
		if(visibility === 0) {
			el.style.visibility = 'hidden';	
		} else if(visibility === 1) {
			el.style.visibility = 'visible';
		} else {
			el.style.visibility = 'visible';
		}
		this.setupPath(el, length, options.start, options.end);
	},
	animate: function(el, options) {
		var length = this.getLength(el);
		var delay = (options.delay) ? options.delay : 0;
		var timing = (options.timing) ? options.timing : 'linear';
		el.style.transition = el.style.WebkitTransition = 'none';
		el.offsetWidth;
		el.style.transition = el.style.WebkitTransition =
		  'stroke-dashoffset '+options.duration+'s ' + timing
		  + ', stroke-dasharray '+options.duration+'s ' + timing;
		setTimeout(function() {this.setupPath(el, length, options.start, options.end);}.bind(this), delay * 1000);
	}
};