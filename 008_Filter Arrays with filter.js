/*
Comments:
The filter method is used to iterate through an array and filter out elements where a given condition is not true.
filter is passed a callback function which takes the current value (we've called that val) as an argument.
Any array element for which the callback returns true will be kept and elements that return false will be filtered out.
The following code is an example of using filter to remove array elements that are equal to five:
Note: We omit the second and third arguments since we only need the value

array = array.filter(function(val) {
  return val !== 5;
});
Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.

Tests:
You should not change the original array.
You should have filtered out all values from the array that are greater than 5.
You should be using the filter method to create a new array.
You should only be using filter to make the new array.
*/

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val){
  return val < 6;
});