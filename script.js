// function insert_Row() {
//     //Write your code here
// 	const table=document.getElementById("sampleTable");
//     const row=document.createElement("tr");
// 	const cell=document.createElement("td");

// 	const clickBtn=docuemnt.querySelector("input");
// 	input.addEventListener("click",()=>{
// 		table.appendChild("row");
// 		row.appendChild("cell");
// 	})
// }

function insert_Row() {
    const table = document.getElementById("sampleTable");

    // Create a new row
    const row = document.createElement("tr");

    // Create two new cells
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");

    // Add text to the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";

    // Append cells to the row
    row.appendChild(cell1);
    row.appendChild(cell2);

    // Insert the new row at the top of the table
    table.insertBefore(row, table.firstChild);
}
