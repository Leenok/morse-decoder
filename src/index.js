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
    let masB = [];
    let itstr = "";
    for(let i=0; i<expr.length; i= i+10){
      masB.push(expr.substr(i, 10));
    }
  
    for(let i in masB){
      let buk ="";
      let simv = masB[i];
      
      for(let t=0; t<10; t+=2){
        let z = simv.substr(t, 2);
        if(z == '10'){ buk+=".";};
        if(z == '11'){ buk+="-";};
      }
      itstr += MORSE_TABLE[buk] || " ";
    }
  
    
  return itstr;
}

module.exports = {
    decode
}
