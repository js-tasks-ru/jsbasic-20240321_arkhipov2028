function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  button.addEventListener('click', () => {
    if (text.hidden !== true) {
      text.hidden = true;
    } else if (text.hidden == true) {
      text.hidden = false;
    }
  });
}
