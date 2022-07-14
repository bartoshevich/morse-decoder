const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let u = [];
    let s = [];
    let result = [];
      if (expr === undefined || expr.length === 0 ) {
        return [];
       } else {
        let symbolNumber = expr.length / 10;
         for (let i = 0; i < symbolNumber; i++) {       
            u[i] = expr.slice(10*i,(10*i) + 10);     
        }
    }
  
    for (let letter of u) {
      if (letter === '**********') {
        letter = ' ';
      } else {
      
      for (let i = 0; i < 5; i++) {  
             s[i] = letter.slice(2*i,(2*i) + 2);      
        }
  
    for (let i = 0; i < 5; i++) {  
          if (s[i] === '00') {
          s[i] = '';
        } else if (s[i] === '10') {
          s[i] = '.';
        } else if (s[i] === '11') {
          s[i] = '-';
        } 
        }  
     letter = s.join('');
  
    for (let [key, prop] of Object.entries(MORSE_TABLE)) {
      if (key === letter) {
        letter = prop;
      }
         
    }
    
    }
  
   result += letter;
     
  }
  return result; 
  
  }

module.exports = {
    decode
}