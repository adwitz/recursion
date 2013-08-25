// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	// your code here
	var arr = [];
  
	function elementsByClass(element, className, array){
		var elements = element.childNodes;
		for (var i in elements){
			child = elements[i];
			if (typeof child === 'object'){
				//is this legal?
				if($(child).hasClass(className)){
					arr.push(child);
				};	
			};
			elementsByClass(child, className, array);  
		};
	};
	elementsByClass(document.body, className, arr);
	return arr;
};