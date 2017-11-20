function ucount(arr) {
  let count = 0;
  let arrCount = [];
  arr.map((element) => {
    if (!arrCount.includes(element)) {
      arrCount.push(element); //add to arrCount only if unique
    }
  });
  return arrCount.length;
}

function mcount(arr) {
  let maxElement = '';
  let maxOccurence = 0;
  arr.map((element) => {
    let occurence = 0;
    arr.map((duplicate) => {
      if (element == duplicate) {
        ++occurence;
      }
    })
    if (occurence > maxOccurence) {
      maxOccurence = occurence;
      maxElement = element;
    }
  })
  return maxElement;
}


ucount([1, 1, 2, '', 4, 6, 'hello', 7, 8, 'toString', 8, 8, 'world']);
mcount([1, 1, 2, '', 4, 6, 'hello', 7, 8, 'toString', 8, 8, 'world']);
