function showSalary(users, age) {
  let SomeUsers = users.filter(item => item["age"] <= age);
  let results = SomeUsers.map(item => item["name"] + " , " +item["balance"]);
  for (let i=0; i < (SomeUsers.length-1); i++) {
    results[i] = results[i] + "\n";
  }
  let str = results.join('');
  return(str);
}
