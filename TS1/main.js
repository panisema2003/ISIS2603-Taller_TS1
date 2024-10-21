"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function displaySeriesTable(series) {
    const tableBody = document.getElementById("seriesTableBody");
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
    displaySeriesTable(data_1.series);
};
