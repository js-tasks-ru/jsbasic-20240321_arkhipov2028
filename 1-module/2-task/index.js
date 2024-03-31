function isValid(name) {
  let n = name.length;
  let space = " ";
  if (n<4 || n==0 || name==null || name.includes(space, 0)) {
    return(false);
  } else {
    return(true);
  }
}
