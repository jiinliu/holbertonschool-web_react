// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students and the studentsList array
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "San Francisco",
};

const studentsList: Student[] = [student1, student2];

// Render a table with first name and location for each student
function renderStudentsTable(students: Student[]): HTMLTableElement {
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const headerRow: HTMLTableRowElement = document.createElement("tr");
  const thFirstName: HTMLTableCellElement = document.createElement("th");
  const thLocation: HTMLTableCellElement = document.createElement("th");

  thFirstName.textContent = "First Name";
  thLocation.textContent = "Location";

  headerRow.append(thFirstName, thLocation);
  thead.appendChild(headerRow);

  const tbody: HTMLTableSectionElement = document.createElement("tbody");

  for (const student of students) {
    const row: HTMLTableRowElement = document.createElement("tr");
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    const locationCell: HTMLTableCellElement = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.append(firstNameCell, locationCell);
    tbody.appendChild(row);
  }

  table.append(thead, tbody);
  table.setAttribute("border", "1");

  return table;
}

// Ensure the DOM is ready before appending the table
document.addEventListener("DOMContentLoaded", () => {
  const table = renderStudentsTable(studentsList);
  document.body.appendChild(table);
});
