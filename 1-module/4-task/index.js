let str = prompt('Введите свой спам');
function checkSpam(str) {
  let strnew = str.toLowerCase();
  if (strnew.includes('1xbet') || strnew.includes('xxx')) {
    alert('Есть спам');
  } else {
    alert('Все чисто');
  }
}
checkSpam(str);
