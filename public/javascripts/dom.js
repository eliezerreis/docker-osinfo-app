const createRow = (el, data) => {
    let row = el.insertRow(el.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.appendChild(document.createTextNode(data.key));
    cell2.appendChild(document.createTextNode(data.value));
}

export default createRow;
