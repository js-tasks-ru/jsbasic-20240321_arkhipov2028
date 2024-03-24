let str = prompt("Введите слово");
function ucFirst(str) {
  if (str != "") {
    let strnew = str[0].toUpperCase();
    let n = str.length;
    for (i=1 ; i<n; i++) {
      strnew = strnew + str[i];
    }
    alert(strnew);
  } else if (str =="") {
    alert("");
  }
}
ucFirst(str);
