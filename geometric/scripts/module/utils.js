import { calculateArea } from './area.js'
import { calculatePerimeter } from './perimeter.js'

const getTableRow = (rectangle) => {
  const { heigth, width } = rectangle;
  const perimetro = calculatePerimeter(heigth, width);
  const area = calculateArea(heigth, width);

  return `
    <tr>
      <td>${heigth} m</td>
      <td>${width} m</td>
      <td>${perimetro} m</td>
      <td>${area} m<sup>2</sup></td>
    </tr>
  `;
}

export { getTableRow };