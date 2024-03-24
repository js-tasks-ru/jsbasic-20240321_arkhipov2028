/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  let n = name.length;
  let space = " ";
  if (n>4 || n==0 || name.includes(space, 0)) {
    
  } else {
    return(name);
  }
}

function sayHello() {
  let name = prompt('Введите ваше имя');

  if (isValid(name)) {
    print(`Welcome back, ${name}!`);
  } else {
    print('Некорректное имя');
  }
}
sayHello();
