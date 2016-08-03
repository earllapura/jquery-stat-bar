# Single Stacked Bar Graph
This JS library imitates the Language Status Bar Graph of GitHub

## Dependencies
* Jquery ~1.3

## Usage

```
//Add the CSS file
<script src="path/to/singleStack.css"></script>

//The container class to hold stacked bar
<div class="myClass"><div>

//The viewport element to view legend and details
<div class="single-stack-bar-stats"></div>

//Add the JS file
<script src="path/to/jQuery.js"></script>

//Add the JS file
<script src="path/to/singleStack.js"></script>

//The main logic
<script type="text/javascript">
	//The JSON data variable
	var myData = [
		{name: "Element One", value: 20, color: "blue"},
		{name: "Element Two", value: 30, color: "red"},
		{name: "Element Three", value: 50, color: "green"}
	];
	$('.myClass').singleStack(myData);
</script>
```

## Requirements
- A `div` element as container of the graph
- A `div` element with class name `single-stack-bar-stats` after the container element
- The CSS and JS file of the package included in the HTML file
- JQuery included before the singleStack
- An array of JSON objects with attributes: name, value and color