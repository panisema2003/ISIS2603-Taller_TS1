import { Serie } from "./Serie";
import { series } from "./data";

function displaySeriesTable(series: Serie[]) {
  const tableBody = document.getElementById("seriesTableBody") as HTMLElement;

  series.forEach((serie) => {
    const row = `
      <tr>
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
        <td>${serie.description}</td>
        <td><a href="${serie.webPage}" target="_blank">Link</a></td>
        <td><img src="${serie.image}" alt="${serie.name}" style="width: 100px;"></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

window.onload = () => {
  displaySeriesTable(series);
};
