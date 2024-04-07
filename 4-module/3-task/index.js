function highlight(table) {
  let tbodies = table.getElementsByTagName('tbody')[0];
  let trs = tbodies.getElementsByTagName('tr');
  for (let i=0; i<trs.length; i++) {
    if (trs[i].cells[3].dataset.available == "true") {
      trs[i].classList.add("available");
    } else if (trs[i].cells[3].dataset.available == "false") {
      trs[i].classList.add("unavailable");
    } else {
      trs[i].hidden = true;
    }
  }
  for (let i=0; i<trs.length; i++) {
    if (trs[i].cells[2].textContent == "m") {
      trs[i].classList.add("male");
    } else if (trs[i].cells[2].textContent == "f") {
      trs[i].classList.add("female");
    }
  }
  for (let i=0; i<trs.length; i++) {
    if (trs[i].cells[1].textContent < 18) {
      trs[i].style="text-decoration: line-through";
    }
  }
}
