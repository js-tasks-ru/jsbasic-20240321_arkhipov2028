let n = prompt("Введите число");
function factorial(n) {
  let iter = n*(n-1);
  if ((n-1)>1) {
    while ((n-1)>1) {
      iter = iter*((n-1)-1);
      n--;
  }
  } else if (n == 1 || n == 0) {
    iter = 1;
  } else if (n<0) {
    iter = "Почитай Демидовича что-ли";
  }
  alert(iter);
}
factorial (n);

