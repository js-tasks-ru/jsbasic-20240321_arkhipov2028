function factorial(n) {
  let result = n*(n-1);
  if (n == 1 || n == 0) {
     return(1);
  } else if ((n-1)>1){
    while ((n-1)>1) {
      result = result*((n-1)-1);
      n--;
    }
  }
  return(result);
}


