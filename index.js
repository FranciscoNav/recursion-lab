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