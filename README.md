# Single Stacked Bar Graph
This JS library imitates the Language Status Bar of GitHub
## Dependencies
* Jquery ~1.3

## Usage

```
//The viewport element to view legend and details
<div class="viewport"></div>
//The container class to hold stacked bar
<div class="myClass"><div>
...
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
