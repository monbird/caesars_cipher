// ENCODE
function encode(str, shiftBy) {
  let strUpper = str.toUpperCase();
  let regex = /[A-Z]/;
  let newStr = "";
  let zCode = "Z".charCodeAt();
  let aCode = "A".charCodeAt();

  for (let i = 0; i < strUpper.length; i++) {
    if (regex.test(strUpper[i])) {
      let oldCharCode = strUpper.charCodeAt(i); 
      let newCharCode = (oldCharCode + shiftBy) % (zCode + 1);  
      if (newCharCode < aCode) {
        newCharCode = newCharCode + aCode;
      }
      let newChar = String.fromCharCode(newCharCode);
      newStr = newStr.concat(newChar);
    } else {
      newStr = newStr.concat(strUpper[i]);
    }
  }
  return newStr;
}


// DECODE:
function decode(str, shiftBy) {
  let strUpper = str.toUpperCase();
  let regex = /[A-Z]/;
  let newStr = "";
  let zCode = "Z".charCodeAt();
  let aCode = "A".charCodeAt();
 
  for (let i = 0; i < strUpper.length; i++) {
    if (regex.test(strUpper[i])) {
      let oldCharCode = strUpper.charCodeAt(i);
      let newCharCode = oldCharCode - shiftBy;
      if (newCharCode < aCode) {
           var diff = aCode - newCharCode;
           newCharCode = zCode + 1 - diff;
      }
      let newChar = String.fromCharCode(newCharCode);
      newStr = newStr.concat(newChar);
    } else {
      newStr = newStr.concat(strUpper[i]);
    }
  }
  return newStr;
}


  document.addEventListener("DOMContentLoaded", function(){  // this event listener makes sure the code inside will run only after the DOM content (html structure) is loaded 


});   
