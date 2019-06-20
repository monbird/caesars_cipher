function rot13(str) {
    let regex = /[A-Z]/;
    let newStr = "";
    let zCode = "Z".charCodeAt();
    let aCode = "A".charCodeAt();
  
    for (let i = 0; i < str.length; i++) {
      if (regex.test(str[i])) {
        let oldCharCode = str.charCodeAt(i); 
        let newCharCode = (oldCharCode + 13) % (zCode + 1);  
        if (newCharCode < 65) {
          newCharCode = newCharCode + aCode;
        }
        let newChar = String.fromCharCode(newCharCode);
        newStr = newStr.concat(newChar);
      } else {
        newStr = newStr.concat(str[i]);
      }
    }
    return newStr;
  }


  document.addEventListener("DOMContentLoaded", function(){  // this event listener makes sure the code inside will run only after the DOM content (html structure) is loaded 


});   