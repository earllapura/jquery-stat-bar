(function( $ ) {
	$.fn.singleStack = function(data) {
		var total = 0;
		//throw error if not div element
		if(!(this.is('div'))) throw new Error('Element attached is not a div element.');
		//warn if no viewport is available
		if($('div.single-stack-bar-stats').length === 1){
			$('div.single-stack-bar-stats').hide();
			$('div.single-stack-bar-stats').append('<ol class="single-stack-bar-stats-numbers"></ol>');
			this.click(function(){
				$('div.single-stack-bar-stats').slideToggle('slow');
			});
		}
		else console.warn('Warning: No viewport element is available');
		//throw error if data is not array
		if(!($.isArray(data))) throw new Error('Data inputted is not an array');
		//warn if data has no elements
		if(!($.isArray(data))) console.warn('Array inputted is not an array');
		//add styles to div
		this.addClass('single-stack-bar-container');
		//return length
		if(data.length === 0) return this;
		//get total
		for (var i = data.length - 1; i >= 0; i--) {
			total += parseFloat(data[i].value);
		}
		//append the bar
		for (var j = 0; j < data.length; j++) {
			var percentage = ((data[j].value/total)*100).toFixed(2);
			this.append('<span class="single-stack-slice" style="width:'+percentage+'%; background-color:'+data[j].color+';">'+data[j].name+'</span>');
			$('div.single-stack-bar-stats ol').append('<li><a href="#visualization"><span class="legend-color" style="background-color:'+data[j].color+'"></span><span class="legend-name">'+data[j].name+'</span><span class="percent">'+percentage+'%</span></a></li>');
		}

		return this;
	};
}( jQuery ));