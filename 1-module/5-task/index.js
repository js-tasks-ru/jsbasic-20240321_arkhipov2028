function truncate(str, maxlength) {
  let n = str.length;
  if (n > maxlength) {
    let threepoint = "…";
    let newstr = str.slice(0, maxlength-1) + threepoint;
    return(newstr);
  } else {
    return(str);
  }
}

