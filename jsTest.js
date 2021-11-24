

// NEW TEST BEGIN

// create a function that returns an array of objects based on the input arguement. Example: cars - return only color - red

function myFunction(car, returnColor) {

 let returnCars = []
 
		for (var i = 0; i < car.length; i++) {
      if (car[i].color == "red") {
        returnCars.push(car[i])
      }
    }

   return returnCars
}


let car = [{
  "color": "purple",
  "type": "minivan",
  "registration": new Date('2012-02-03'),
  "capacity": 7
}, 
{
  "color": "red",
  "type": "minivan",
  "registration": new Date('2012-02-03'),
  "capacity": 7
},
{
  "color": "purple",
  "type": "car",
  "registration": new Date('2012-01-03'),
  "capacity": 3
},
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }];

let returnColor = "red"

console.log(myFunction(car, returnColor))


/// TEST END

//NEW TEST BEGIN


// create two copies of an object, one shallow and one deep, and return the difference in the original object depending on each one
function myFunction(newObj) {


   return newObj
}


let newObj = { prop1: null, prop2: null }

// this will keep the original object in tact
let newObj2 = { ...newObj }

//this one would update the old object as well
// let newObj2 = newObj

newObj2.prop1 = 'hey'

console.log(myFunction(newObj))

//  TEST END


// NEW TEST

// use an async callback, I pass the json Url HEY and it waits to console log it until it figures out JOE, which is on a timer, and then that new variable is sent through the callback

function download(jsonURL, callback) {
 	setTimeout(() => {
  		if (jsonURL === '' || null) {
        console.log("error");
      }
  		else { 
  		// script to DL the data, probably push it to an HTML element
        console.log(`Downloading ${jsonURL}`)

      // returned data after some time
        const newDataThatCameIn = "Joe"

        // process only once its complete


      // pass the new data to the call back (process in this case)
        callback(newDataThatCameIn)
    }
 
  }, 3000)
  return true
}

function process(newDataThatCameIn) {
    console.log(`Processing ${newDataThatCameIn}`);
    return true
}

let jsonURL = "Hey"

console.log(download(jsonURL, process))


// TEST END


// NEW TEST BEGIN

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
// example: myFunction({  continent: 'Asia',  country: 'Japan'})
// expected: Japan

function myFunction(data) {

			

   return data.country
}

let obj1 = {continent: 'Asia',  country: 'Japan'}

console.log(myFunction(obj1))



//  TEST END



// NEW TEST BEGIN

// practice basic callbacks in various ways, event listener as well

let numbers = [1, 2, 4, 7, 3, 5, 6];

// old school
function isOddNumber(number) {
    return number % 2;
}


// anonymous
let oddNumbers = numbers.filter(function(number) {

	return number % 2;

});

// event listener

function btnClicked() { 
   console.log("test")
}

// get the element form html
let btn = document.querySelector('#btn');

//liten to html element for click 
btn.addEventListener('click',btnClicked);

// es6
let oddNumbersES = numbers.filter(number => number % 2);


console.log(oddNumbersES);

//TEST END



// NEW TEST BEGIN



// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
// example myFunction({  one: 1,  'prop-2': 2})
// expexted 2

function myFunction(data) {

   return data['prop-2']
}

let myObj = {one: 1,  'prop-2': 2}

console.log(myFunction(myObj))

//  TEST END


// TEST BEGIN
// return the arguement from the property

function myFunction(data, arg) {

   return data[arg]
}

let myObj = {continent: 'Asia',  country: 'Japan'}

let myArg = "continent"

console.log(myFunction(myObj, myArg))

//  TEST END





// NEW TEST BEGIN

// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'
/// example myFunction({ continent: 'Asia', country: 'Japan', region: 'Kansai' })
// expected  { continent: 'Asia', region: 'Kansai' }

function myFunction(data) {

		delete data.country

   return data
}

var myObj = { continent: 'Asia', country: 'Japan', region: 'Kansai' }

console.log(myFunction(myObj))

//  TEST END





// NEW TEST BEGIN

// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

//example ({ continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' })

//expected { continent: 'Europe', country: 'Germany', planet: 'Earth', state: 'Bavaria', city: 'Munich'}

function myFunction(obj1, obj2) {

 			obj2['city'] = obj2['country']
      
			  delete obj2['country']
			 
			  let newObj = {...obj1,
							...obj2
							 }
   return newObj
}

let firstObj = { continent: 'Europe', country: 'Germany' }

let secondObj = { planet: 'Earth', country: 'Munich', state: 'Bavaria' }

console.log(myFunction(firstObj, secondObj))

//  TEST END





// NEW TEST BEGIN

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

//input myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' })
// output { animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }

function myFunction(data) {

	 var newerObj = {};
  for(var key in data){
    newerObj[data[key]] = key;
  }

   return newerObj
}

let newObj = { bear: 'animal', sow: 'female', boar: 'male', cub: 'young' }

console.log(myFunction(newObj))


//  TEST END





// NEW TEST BEGIN



//  TEST END





// NEW TEST BEGIN


// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// expected:  { a: 'a', b: 'b', c: null }

function myFunction(arg1) {
Object.keys(arg1).forEach(k => arg1[k] = arg1[k] === '' ? null : arg1[k])

   return arg1
   
   }

let arg1 = { a: 'a', b: 'b', c: '' }

console.log(myFunction(arg1))



//  TEST END





// NEW TEST BEGIN


// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested int

// expected:  {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

function myFunction(arg1) {


let newObj = {
firstname: arg1.fn,
lastname: arg1.ln,
size: arg1.size + 'cm',
weight: arg1.weight + 'kg'
}

   return newObj
}

let arg1 = {fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}

console.log(myFunction(arg1))



//  TEST END





// NEW TEST BEGIN


// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// myFunction(['test', 'test', 'test'])
// expected : true

// examples myFunction(['10',10,10,10])
// expected: false


function myFunction(testArray) {

 for(var i = 0; i < testArray.length - 1; i++) {
        if(testArray[i] !== testArray[i+1]) {
            return false;
        }
      }

   return true;
}

let testArray = ['test', 'test', 'test']

console.log(myFunction(testArray))


//  TEST END





// NEW TEST BEGIN


// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

//test cases: myFunction([1,3,2])
// expected: Expected [3,2,1]

function myFunction(data) {

 data.sort();

   return data
}

var data = [1,3,2]

console.log(myFunction(data))


//  TEST END





// NEW TEST BEGIN


// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically
//input myFunction(['b', 'c', 'd', 'a'])
// expected ['a', 'b', 'c', 'd']


function myFunction(alphas) {

			alphas.sort();

   return alphas
}

let alphas = ["b", "c", "d", "a"]

console.log(myFunction(alphas))

//  TEST END





// NEW TEST BEGIN

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
// input myFunction([10,100,40])
// expected output 50

function myFunction(numberArray) {

var total = 0;
for(var i = 0; i < numberArray.length; i++) {
    total += numberArray[i];
    console.log(total)
}
var avg = total / numberArray.length;

   return avg
}

let numberArray = [10,100,40]

console.log(myFunction(numberArray))


//  TEST END





// NEW TEST BEGIN

// Write a function that takes an array of strings as argument
// It should return the longest string

// input myFunction(['help', 'me'])
// expected 'help'

function myFunction(data) {

  var max = data[0].length;
  data.map(v => max = Math.max(max, v.length));
  result = data.filter(v => v.length == max);
 


   return result
}


console.log(myFunction(['help', 'me']))


//  TEST END





// NEW TEST BEGIN

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
// input myFunction([1, 2, 3], [4, 5, 6])
// expected [1, 2, 3, 4, 5, 6]

function myFunction(input, secondInput) {


// merge array1 and array2
let mergeResult = input.concat(secondInput);

   return mergeResult
}

console.log(myFunction([1, 2, 3], [4, 5, 6]))



//  TEST END





// NEW TEST BEGIN

// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version
//input myFunction([1,2,3], 2)
// expected [1, 3]

function myFunction(data, arg) {

	  var index = data.indexOf(arg);
  if (index > -1) {
    data.splice(index, 1);
  }
  return data;

   return newArray
}

let myVar = [1,2,3]

let myArg = 3

console.log(myFunction(myVar,myArg))


//  TEST END





// NEW TEST BEGIN


// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
// input myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
// expected  [ -11, -10, 5, 22, 41,  42, 333]

function myFunction(firstVar, secondVar) {

			let mergeResult = firstVar.concat(secondVar);
      
      mergeResult.sort(function(a, b){return a-b});

   return mergeResult
}

let myVar = [-10, 22, 333, 42]

let secondVar = [-11, 5, 22, 41, 42]

console.log(myFunction(myVar, secondVar))

//  TEST END





// NEW TEST BEGIN


// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

// input myFunction([78, 99, 100, 101, 401], 99)
//expected 602

function myFunction(data, arg) {
			var	newSum = 0
        for (let i = 0; i < data.length; i++) {
             
             if (data[i] > arg) { 
              	newSum += data[i];
              }


        }

   return newSum
   
}

let myArray = [78, 99, 100, 101, 401]

let myArg = 99

console.log(myFunction(myArray, myArg))

//  TEST END





// NEW TEST BEGIN


// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

// expected input myFunction(2, 10)
// output: [2, 3, 4, 5, 6, 7, 8, 9, 10]

function myFunction(data, data2) {
			
      fullRange = []
      
      for (var i = data; i <= data2; i++) {
          fullRange.push(i);
      }
			

   return fullRange
}

let firstRange = 2
let secondRange = 10

console.log(myFunction(firstRange, secondRange))



//  TEST END





// NEW TEST BEGIN

// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all
// input myFunction([1, 2, 3, 4, 5], 2)
// output [ 4, 5 ]

function myFunction(data, dataTwo) {

let newVar = data.slice(-dataTwo)

   return newVar
}

let varOne = [1, 2, 3, 4, 5]

let varTwo = 3

console.log(myFunction(varOne, varTwo))


//  TEST END





// NEW TEST BEGIN

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
//example: myFunction(['Alf', 'Alice', 'Ben']
//output : { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(peopleNames) {

		peopleNames.sort();
    
    let objectA = {}
    

		 for (const key of peopleNames) {
     
     let firstChar = key.charAt(0) 
     
     var startsWith = peopleNames.filter((personName) => personName.startsWith(firstChar));
     
     objectA[firstChar] = startsWith
          
			 }

   return objectA
}

let peopleNames = ['Alf', 'Ben', 'Alice']

console.log(myFunction(peopleNames))


//  TEST END





// NEW TEST BEGIN

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
// input myFunction([1,2,3], 6)
//expected: [6,1,2,3]

function myFunction(data, arg) {
		
    let newArray = []

			if (arg >= 6) {
      		newArray = [arg] 
          }
          else
          {
          newArray = ['0']
          }
          
        
     newArray = newArray.concat(data)

   return newArray
}

let input = [1,2,3]

let varArg = 6

console.log(myFunction(input, varArg))


//  TEST END





// NEW TEST BEGIN

// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as argument
// It should return true if the dates are equal
// It should return false otherwise
// input myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
// expected false

function myFunction(date1, date2) {

		if (date1.getDate() === date2.getDate())
		{
       return true
    }
   else {
   
       return false
       }
}
let date1 = new Date('2000/01/01 08:00:00')
let date2 = new Date('2000/01/01 08:00:00')

console.log(myFunction(date1, date2))


//  TEST END





// NEW TEST BEGIN

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
// input myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
// expected 10

function myFunction(data1, data2) {

// To calculate the time difference of two dates
var Difference_In_Time = data1.getTime() - data2.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

   return Difference_In_Days
}

let date1 = new Date('2020-06-11')
let date2 = new Date('2020-06-01')

console.log(myFunction(date1, date2))

//  TEST END





// NEW TEST BEGIN

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
// input myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
// exptected false

function myFunction(date1, date2) {

	let day1 = date1.getDay();
  let day2 = date2.getDay();
  
  if (day1 === day2) {
  		return true
  }
	else {
    
   return false
   }
}

let date1 = new Date('2000/01/01')
let date2 = new Date('2000/01/08')

console.log(myFunction(date1, date2))

//  TEST END





// NEW TEST BEGIN

// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
// input myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
// expected true

function myFunction(date1, date2) {


var ONE_HOUR = 60 * 60 * 1000; /* ms */
var dateNoTime1 = date1.toLocaleDateString();
var dateNoTime2 = date2.toLocaleDateString();
var hr1 = date1.getHours();console.log(hr1);
var hr2 = date2.getHours();console.log(hr2);

		if (dateNoTime1 === dateNoTime2 && hr1 === hr2)
    {
    return true
    }

   return false
}

let date1 = new Date('2000/01/01 08:00:00')
let date2 = new Date('2000/01/01 08:45:00')

console.log(myFunction(date1, date2))