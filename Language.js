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

ucount([1, 1, 2, '', 4, 6, 'hello', 7, 8, 'toString', 8, 8, 'world']);
