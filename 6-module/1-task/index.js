/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  constructor(rows) {
    document.body.appendChild(this.menu());
        this.tbody = document.createElement('tbody');
        for (let row of rows ) {
          this.tr = document.createElement('tr');
          for (let key in row) {
            this.td = document.createElement('td');
            this.tr.appendChild(this.td);
            this.td.innerHTML = row[key];
          }
          this.tbody.appendChild(this.tr);
          this.cross = document.createElement('td');
          this.cross.innerHTML = '<button>[X]</button>';
          this.tr.appendChild(this.cross);
        }
        this.elem.appendChild(this.tbody);
        this.deleteRow() 
  }
  menu() {
    this.elem = document.createElement("table");
    this.thead = document.createElement("thead");
    this.list = document.createElement("tr");
    this.list.innerHTML = '<th>Имя</th>\
    <th>Возраст</th>\
    <th>Зарплата</th>\
    <th>Город</th>\
    <th></th>'
    this.thead.appendChild(this.list);
    this.elem.appendChild(this.thead);
    return this.elem;
  }
  deleteRow() {
    for (const button of this.elem.querySelectorAll("button")) {
      button.addEventListener('click', (event) => {
        event.target.closest("tr").remove();
      })
    }
  }
}
