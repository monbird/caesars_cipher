// DECODE:
function decode(str, shiftBy) {
  let strLower = str.toLowerCase();
  let regex = /[a-z]/;
  let newStr = "";
  let zCode = "z".charCodeAt();
  let aCode = "a".charCodeAt();
 
  for (let i = 0; i < strLower.length; i++) {
    if (regex.test(strLower[i])) {
      let oldCharCode = strLower.charCodeAt(i);
      let newCharCode = oldCharCode - shiftBy;
      if (newCharCode < aCode) {
           var diff = aCode - newCharCode;
           newCharCode = zCode + 1 - diff;
      }
      let newChar = String.fromCharCode(newCharCode);
      newStr = newStr.concat(newChar);
    } else {
      newStr = newStr.concat(strLower[i]);
    }
  }
  return newStr; 
}


// ENCODE
function encode(str, shiftBy) {
  let strLower = str.toLowerCase();
  let regex = /[a-z]/;
  let newStr = "";
  let zCode = "z".charCodeAt();
  let aCode = "a".charCodeAt();

  for (let i = 0; i < strLower.length; i++) {
    if (regex.test(strLower[i])) {
      let oldCharCode = strLower.charCodeAt(i); 
      let newCharCode = (oldCharCode + shiftBy) % (zCode + 1);  
      if (newCharCode < aCode) {
        newCharCode = newCharCode + aCode;
      }
      let newChar = String.fromCharCode(newCharCode);
      newStr = newStr.concat(newChar);
    } else {
      newStr = newStr.concat(strLower[i]);
    }
  }
  return newStr;
}



document.addEventListener("DOMContentLoaded", function() {  // this event listener makes sure the code inside will run only after the DOM content (html structure) is loaded 

  let decodeButton = document.getElementById("decode");
  let encodeButton = document.getElementById("encode");

  let regex = /^[0-9]+$/;

  decodeButton.addEventListener("click", function() {
    let input = document.getElementById("ciphertext");
    let output = document.getElementById("plaintext");
    let shift = document.getElementById("shift-by");

    // RESET TO DEFAULT STYLES
    input.style['border'] = 'solid 2px black';
    output.style['border'] = 'solid 2px black';
    shift.style['border'] = 'solid 1px black';

    if (!input.value) {
      input.style['border'] = 'solid 3px red';
      alert("Empty input -> to 'decode' type ciphertext");
    } else {
      if(shift.value === '') {
        output.value = decode(input.value, 13);  
        output.style['border'] = 'solid 3px #806ad7';
        shift.value = 13;
      } else if (!shift.value || !regex.test(shift.value)) {
        shift.value = '';
        alert("Wrong input -> 'shift by' should be a number");
        shift.style['border'] = 'solid 2px red';
      } else {
        let shiftBy = parseInt(shift.value);
        if( shiftBy < 1 || shiftBy > 25) {
          alert("Wrong input -> 'shift by' must be between 1-25");
          shift.style['border'] = 'solid 2px red';
          shift.value = '';
        } else {
          output.value = decode(input.value, shiftBy);  
          output.style['border'] = 'solid 3px #806ad7';
        }
      }
    }
  });

  encodeButton.addEventListener("click", function() {
    let input = document.getElementById("plaintext");
    let output = document.getElementById("ciphertext");
    let shift = document.getElementById("shift-by");

    // RESET TO DEFAULT STYLES
    input.style['border'] = 'solid 2px black';
    output.style['border'] = 'solid 2px black';
    shift.style['border'] = 'solid 1px black';

    if (!input.value) {
      input.style['border'] = 'solid 3px red';
      alert("Empty input -> to 'encode' type plaintext");
    } else {
      if(shift.value === '') {
        output.value = encode(input.value, 13);  
        output.style['border'] = 'solid 3px #806ad7';
        shift.value = 13;
      } else if (!shift.value || !regex.test(shift.value)) {
        shift.value = '';
        alert("Wrong input -> 'shift by' should be a number");
        shift.style['border'] = 'solid 2px red';
      } else {
        let shiftBy = parseInt(shift.value);
        if( shiftBy < 1 || shiftBy > 25) {
          alert("Wrong input -> 'shift by' must be between 1-25");
          shift.style['border'] = 'solid 2px red';
          shift.value = '';
        } else {
          output.value = encode(input.value, shiftBy);  
          output.style['border'] = 'solid 3px #806ad7';
        }
      }
    }
  });
});   
