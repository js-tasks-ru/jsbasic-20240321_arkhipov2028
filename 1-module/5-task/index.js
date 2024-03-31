function truncate(str, maxlength) {
  let n = str.length;
  if (n > maxlength) {
    let threepoint = "…";
    let newstr = str.slice(0, maxlength) + threepoint;
    return(newstr);
  } else {
    return(str);
  }
}

