  export const hackerSpeak = (words) => {
    var replaceString = {
      "a": "4",
      "e": "3",
      "i": "1",
      "o": "0",
      "s": "5"
    }
    return words.replace(/[aeios]/gi, matched => replaceString[matched.toLowerCase()]);
    
    
    }
    
