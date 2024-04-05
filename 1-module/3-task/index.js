function ucFirst(str) {
  if (str =="") {
    return("");
  } else if (str != "") {
    let strnew = str[0].toUpperCase() + str.slice(1);
    return(strnew);
  }
}

