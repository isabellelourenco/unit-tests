export const hashtags = (text) => {
  var words = text.split(' ');
  var hashtagStrings = [];

  for (const position in words ){
    const word = words[position];
    if(word.startsWith('#')){
      hashtagStrings.push(word);
    } 
  }
  return hashtagStrings;
}


