var CircleGrid = (function(CircleGrid){

	console.log("data!");

	var randomFill = function(arr, n, limit) {
		var limit = limit ? limit : 256;

		for(var i = 0; i < n; i++){
			arr[i] = Math.floor(limit * Math.random());
		}		
	}

	CircleGrid.sizes = [];
	randomFill(CircleGrid.sizes, 100);

	CircleGrid.posx = [];
	randomFill(CircleGrid.sizes, 100);

	CircleGrid.posy = [];
	randomFill(CircleGrid.sizes, 100);


	return CircleGrid;
	

})(CircleGrid || {});

$( document ).ready(function(){
	console.log("loaded!");	
	$('#data').append('<svg></svg>');

	var svg = d3.select("svg");
	
	svg.selectAll("circle")
		.data(CircleGrid.sizes)
		.enter().append("circle")
		.attr("cy", 60)
		.attr("cx", function(d, i) { return i * 100 + 30; })
		.attr("r", function(d) { return Math.sqrt(d); })

});
