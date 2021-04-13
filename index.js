class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(sentence){
    let splitSentence = sentence.split(" ")
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    splitSentence[0] = Formatter.capitalize(splitSentence[0])
    for(let i = 1; i < splitSentence.length; i++){
      if(exceptions.find(word => word === splitSentence[i])){
      } else { splitSentence[i] = Formatter.capitalize(splitSentence[i])}
    }

    return splitSentence.join(' ')
  }
}