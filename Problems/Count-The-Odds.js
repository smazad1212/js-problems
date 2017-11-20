function countTheOdds (str) {
  let range = str.split(' ')
  let count = 0;
  for (var i = range[0]; i <= range[1]; i++) {
    if (i%2 != 0) {
      ++count;
    }
  }
  return count;
}

countTheOdds("1 5")
