export const firstLast = (items) => {
  var last = items.length-1
  if (last < 0) {
    return "No items!"
  }else if(last == 0){
    return `Only item: ${items[0]}`
  }else {
    return `First: ${items[0]}, Last: ${items[last]}`
  }
}

