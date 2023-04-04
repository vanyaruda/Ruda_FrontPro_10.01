const containerTable = document.querySelector(".tableItem");
const table = document.createElement("table");
for (let i = 0; i < 10; i++) {
    const tableTr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
        const tableTd = document.createElement("td");
        tableTd.innerHTML = i * 10 + j + 1;
        tableTr.append(tableTd);
    }
    table.append(tableTr);
}
containerTable.insertAdjacentElement('beforebegin', table)