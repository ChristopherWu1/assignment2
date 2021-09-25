const arr = [1,2,3];

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] == undefined)
            continue;
        //element
        //element, index
        //element, index, and array
        callbackFn(this[i],i,this);
    }


};
/*
console.log("myEach:")
arr.myEach( x => console.log(x));

//returns element and index
console.log("myEach:")
arr.myEach( (x,i) => console.log(x,i));

console.log("forEach:")
arr.forEach( x => console.log(x));

const isEven = (num) => console.log(num % 2 == 0);
arr.myEach(isEven);
*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const thearr = [];
    for(let i = 0; i < this.length ; i++)
    {
        element = callbackFn(this[i]);
        thearr.push(element);
    }
    return thearr;

};
/*
const array1 = [1, 4, 9, 16];
const map1 = array1.myMap(x => x * 2);
console.log(map1);
*/

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    const thearr = [];
    for(let i = 0; i < this.length; i++)
    {
        console.log(this[i]);
        console.log(callbackFn(this[i]));
        if(callbackFn(this[i]))
        {
            thearr.push(this[i]);
        }
    }
    return thearr;

};
/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);

console.log(result);
*/


// SOME //
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i < this.length ; i++)
    {
        if(callbackFn(this[i]))
        {
            return true;
        }
        
    }
    return false;

};
/*
const even = (element) => element % 2 === 0;
console.log(arr.some(even));
console.log(arr.mySome(even));
const arr1 = [1,3,5];
console.log(arr1.some(even));
console.log(arr1.mySome(even));
*/


// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i < this.length; i++)
    {
        if(!callbackFn(this[i]))
        {
            return false;
        }
        
    }
    return true;

};
/*
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  console.log([12, 5, 8, 130, 44].myEvery(isBigEnough));   // false
  console.log([12, 54, 18, 130, 44].myEvery(isBigEnough)); // true
  console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
  console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
*/
// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function(element, start) {
    if(start != undefined)
    {
        //console.log(start);
        for(let i = start; i < this.length; i++)
        {
            if(this[i] == element)
            {
                return true;
            }

        }
        return false;
    }
    else
    {
        //console.log("missing");
        for(let i = 0; i < this.length; i++)
        {
            if(this[i] == element)
            {
                return true;
            }

        }
        return false;
    }


};
/*
let arr1 = [1,1,2,2,3,4,5];
console.log(arr1.myIncludes(4));
console.log(arr1.includes(4));

console.log(arr1.myIncludes(69));
console.log(arr1.includes(69));

console.log(arr1.myIncludes(1,1));
console.log(arr1.includes(1,1));

console.log(arr1.myIncludes(1,2));
console.log(arr1.includes(1,2));
*/

// INDEXOF //
Array.prototype.myIndexOf = function(element, start) {
    if(start != undefined)
    {
        if(start < 0)
        {
            start = this.length + start;
        }
        //console.log(start);
        for(let i = start; i < this.length; i++)
        {
            if(this[i] == element)
            {
                return i;
            }

        }
        return -1;
    }
    else
    {
        //console.log("missing");
        for(let i = 0; i < this.length; i++)
        {
            if(this[i] == element)
            {
                return i;
            }

        }
        return -1;
    }

    

};
/*
const arr2 = [1,1,2,2,3,4,5];
console.log(arr2.myIndexOf(4));
console.log(arr2.indexOf(4));

console.log(arr2.myIndexOf(69));
console.log(arr2.indexOf(69));

console.log(arr2.myIndexOf(1,1));
console.log(arr2.indexOf(1,1));

console.log(arr2.myIndexOf(1,2));
console.log(arr2.indexOf(1,2));
*/
// PUSH //
Array.prototype.myPush = function(...args) 
{
    let arg_i = 0;
    let len = this.length;
    //console.log(len +  arr.length)

    for(let i = len ; i < len + args.length ; i++)
    {
        //console.log(i);
        //console.log("param ",args[arg_i]);
        //console.log("arr",this[arg_i]);
        this[i] = args[arg_i];
        arg_i++;

    }
    return this.length;

};
/*
arr.myPush(4,5,6,9);
console.log(arr);

const arr1 = [1,2,3]
arr1.push(4,5,6,9);
console.log(arr1);
*/
// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(element, start) {
    if(start === undefined)
    {
        for(let i = this.length-1; i >= 0 ; i--)
        {
            //console.log(element, " ", this[i]);
            
            if(element === this[i])
            {
                
                return i;
            }
        }
        return -1;

    }
    else
    {
        if(start < 0)
        {
            start = this.length + start;
        }
        //console.log(element, " ", this[i]);
        for(let i = start; i >= 0 ; i--)
        {
            if(element === this[i])
            {
                return i;
            }
        }
        return -1;
    }
};
/*
var numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2));     // 3
console.log(numbers.lastIndexOf(7));     // -1
console.log(numbers.lastIndexOf(2, 3));  // 3
console.log(numbers.lastIndexOf(2, 2));  // 0
console.log(numbers.lastIndexOf(2, -2)); // 0
console.log(numbers.lastIndexOf(2, -1)); // 3

console.log("---------------");

console.log(numbers.myLastIndexOf(2));     // 3
console.log(numbers.myLastIndexOf(7));     // -1
console.log(numbers.myLastIndexOf(2, 3));  // 3
console.log(numbers.myLastIndexOf(2, 2));  // 0
console.log(numbers.myLastIndexOf(2, -2)); // 0
console.log(numbers.myLastIndexOf(2, -1)); // 3
*/

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};