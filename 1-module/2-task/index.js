function isValid(name) {
  if (name==undefined) {
    return(false);
  } else {
    let n = name.length;
    let space = " ";
    if (n<4 || n==0 || name.includes(space, 0)) {
      return(false);
    } else {
      return(true);
    }
  }
}
