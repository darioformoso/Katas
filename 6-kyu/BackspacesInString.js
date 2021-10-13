//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

//Your task is to process a string with "#" symbols.

//Solution
function cleanString(s) {
    let string = s;
  
    for (let i = 0; i < s.length-1; i += 1) {
      const idx = string.indexOf('#');
      const splitStr = string.split(string.slice(idx-1, idx+1)).join('');
      
      if (idx === 0) {
        string = string.substring(1, );
        
        if (string === '#') {
          return '';
        }
        
      } else {
        string = splitStr;
      }
    }
    
    return string;
  };