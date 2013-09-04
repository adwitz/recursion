// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
// your code goes here
	var toString = '';
	
	switch(typeof obj){
		case('number'):
			toString += String(obj);
			break;
		case('string'):
			toString += "\"" + obj + "\"";
			break;
		case('boolean'):
			toString += String(obj);
			break;
		case('undefined'):
			break;
		case('function'):
			break;
		case('object'):
			if (obj === null){
				toString += 'null';
			} else if (Array.isArray(obj)){
				toString += '[';
				_.each(obj, function(value, key){
					toString += stringifyJSON(value);
					if (key < obj.length-1){
						toString += ",";
					};
				});
				toString += ']';
			} else {
				toString += '{';
				var counter = 0;
				_.each(obj, function(value, key){
					if (value === undefined || typeof value === 'function'){
						return toString;
					};
					toString += stringifyJSON(key) + ':' + stringifyJSON(value);
					if (counter < Object.keys(obj).length-1){
						toString += ",";
						counter++;
					};
				});
				toString += "}";
			};
			break;
		};
	return toString;
};