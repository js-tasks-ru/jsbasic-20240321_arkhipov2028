function checkSpam(str) {
  let strnew = str.toLowerCase();
  if (strnew.includes('1xbet') || strnew.includes('xxx')) {
    return(true);
  } else {
    return(false);
  }
}

