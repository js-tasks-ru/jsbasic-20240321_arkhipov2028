function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (salaries[key] % 1 !== 0 || salaries[key] == Infinity || salaries[key] == -Infinity || salaries[key] == NaN || salaries[key] == true) continue;
    sum = sum + salaries[key];
  }
  return(sum);
}
