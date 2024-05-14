//* PARTE 01
console.warn("PARTE 01");
import { rectangles } from './module/data.js'
import { getTableRow } from './module/utils.js'

const tableBodySelector = document.getElementById('table-body');

const printRectangles = (rectangles) => {
  let content = '';
  for (const rectangle of rectangles) {
    content += getTableRow(rectangle);
  }
  tableBodySelector.innerHTML = content;
}

printRectangles(rectangles);

