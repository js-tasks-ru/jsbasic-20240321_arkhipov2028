function getMinMax(str) {
  let arr = str.split(' ');
  let filtered = arr.filter(item => isNaN(item) !== true).map(numeric => Number(numeric)).sort((function(a, b) { return a - b; }));
  let result = {};
  result.min = filtered[0];
  result.max = filtered[filtered.length-1];
  return(result);
}
