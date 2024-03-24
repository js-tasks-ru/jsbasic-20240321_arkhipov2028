let str = prompt("Введите строку");
let maxlength = prompt("Введите максимальное число символов");
function truncate(str, maxlength) {
  let n = str.length;
  if (n > maxlength) {
    let threepoint = "…";
    let newstr = str.slice(0, maxlength) + threepoint;
    alert(newstr);
  } else {
    alert(str);
  }
}
truncate(str, maxlength);
