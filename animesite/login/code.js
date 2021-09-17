function countBy(x, n) {
    var z = [];
  var index = 1;
    while(z.length < n){
      z.push(x * index)
      index++
    }
  
    return z;
  }