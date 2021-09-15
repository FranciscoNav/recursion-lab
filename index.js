// Code your solution here!

function printString(param) {
    console.log(param[0]);
  
    if(param.length > 1){
      let mySubstring;
  
      mySubstring= param.substring(1, param.length)
  
      printString(mySubstring)
    }else{
      return true
    }
}

function reverseString(param) {

    console.log(param.substring(1)) 

    if(param.length < 2){
        return param;
    }else{
        return reverseString(param.substring(1)) + param[0];
    }  
}
  
function isPalindrome(myString) {
    let l = myString.length;
    console.log(myString)

    if (l < 2) {
        return true;
    } else if (myString[l - 1] === myString[0]) {
        return isPalindrome(myString.substring(1, l - 1));
    } else {
        return false;
    }
}
  
function addUpTo(myArray, index) {  
    if(index){
        return myArray[index] + addUpTo(myArray,--index)
    }else{
        return myArray[index]
    }
}
  
function maxOf(anArray) {
    if (anArray.length === 1){
        return anArray[0]
    }else{
        return Math.max(anArray.pop(), maxOf(anArray))
    }
}
  
function includesNumber(myArray, myNumber) {
    if (myArray.length === 1){
        return false
    }else if(myArray[0] === myNumber){
        return true
    }else{
        return includesNumber(myArray.slice(1), myNumber)
    }
}