// Use Arrow Functions to Write Concise Anonymous Functions
 const magic =() =>new Date();
 //arrow function with parameters
 const myConcat =(arr1, arr2) => arr1.concat(arr2);

 console.log(myConcat([1,2],[3,4,5]));
 //Higher Order Arrow Functions
 const realNumberArray =[4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2 ];

 const squareList = (arr) => {
 	const squaredIntegers =arr.filter(num => Number.isInteger(num) && num>0),map(x => x* x);
 	return squaredIntegers;
 };

 const squaredIntegers = squareList(realNumberArray);
 console.log(squaredIntegers);
// write higher order functions
const increment= (function() {
	return function increment(number, value = 1)
	return number+value;
	};
})();
console.log(increment (5,2));
console.log(increment (5));