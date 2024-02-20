// const name = document.getElementById("name");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//   let messages = [];
//   if (name.value === "" || name.value == null) {
//     messages.push("Name is required");
//   }

//   if (password.value.length <= 6) {
//     messages.push("Password must be longer than 6 characters");
//   }

//   if (password.value.length >= 20) {
//     messages.push("Password must be less than 20 characters");
//   }

//   if (password.value === "password") {
//     messages.push("Password cannot be password");
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorElement.innerText = messages.join(", ");
//   }
// });

function Toggle2() {
  var spanElement = document.getElementById("sec_count");
  var currentValue = parseInt(spanElement.textContent);

  // Check if the count is even or odd
  if (currentValue % 2 === 0) {
    // If even, increment the count
    spanElement.textContent = currentValue + 1;
  } else {
    // If odd, decrement the count to remove the like
    spanElement.textContent = currentValue - 1;
  }
}

function Toggle1() {
  var spanElement = document.getElementById("fs_count");
  var currentValue = parseInt(spanElement.textContent);

  // Check if the count is even or odd
  if (currentValue % 2 === 0) {
    // If even, increment the count
    spanElement.textContent = currentValue + 1;
  } else {
    // If odd, decrement the count to remove the like
    spanElement.textContent = currentValue - 1;
  }
}

// -----------------------------------------

// const toggle_Btn = document.querySelector(".toggle_btn");
// const toggle_BtnIcon = document.querySelector(".toggle_btn i");
// const dropdown_menu = document.querySelector(".dropdown_menu");

// toggle_Btn.onclick = function () {
//   dropdown_menu.classList.toggle("open");
//   const isOpen = dropdown_menu.classList.contains("open");
//   toggle_BtnIcon.className = isOpen ? "fas fa-xmark" : "fas fa-bars";
// };

// function myfunc(event) {
//   event.preventDefault();

//   var blog_name = document.getElementById("blog_name").value;
//   var message = document.getElementById("message").value;
//   var link_more = document.getElementById("link_more").value;
//   var link_image = document.getElementById("link_image").value;

//   localStorage.setItem("ls_full_name", blog_name);
//   localStorage.setItem("ls_message", message);
//   localStorage.setItem("ls_link_more", link_more);
//   localStorage.setItem("ls_link_image", link_image);
// }
// document.getElementById("blog-form").addEventListener("submit", myfunc);

// var selectedRow = null;
// function onFormSubmit() {
//   event.preventDefault();
//   var formData = readformData();
//   if (selectedRow === null) {
//     insertNewRecord(formData);
//   } else {
//     updateRecord(formData);
//   }
//   resetForm;
// }

// // retrieve the data
// function readformData() {
//   var formData = {};
//   formData["blog_name"] = document.getElementById("blog_name").value;
//   formData["message"] = document.getElementById("message").value;
//   formData["link_more"] = document.getElementById("link_more").value;
//   formData["link_image"] = document.getElementById("link_image").value;
//   return formData;
// }

// //Insert the data
// function insertNewRecord(data) {
//   var table = document
//     .getElementById("storeList")
//     .getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.length);
//   var cell1 = newRow.insertCell(0);
//   cell1.innerHTML = data.blog_name;
//   var cell2 = newRow.insertCell(1);
//   cell2.innerHTML = data.message;
//   var cell3 = newRow.insertCell(2);
//   cell3.innerHTML = data.link_more;
//   var cell4 = newRow.insertCell(3);
//   cell4.innerHTML = data.link_image;
//   var cell5 = newRow.insertCell(4);
//   cell5.innerHTML = `<button onClick ='onEdit(this)'> Edit </button> <button onClick ='onDelete(this)'> Delete </button> `;
// }

// //edit the data
// function onEdit(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById("blog_name").value = selectedRow.cells[0].innerHTML;
//   document.getElementById("message").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("link_more").value = selectedRow.cells[2].innerHTML;
//   document.getElementById("link_image").value = selectedRow.cells[3].innerHTML;
// }

// function updateRecord(formData) {
//   selectedRow.cells[0].innerHTML = formData.blog_name;
//   selectedRow.cells[1].innerHTML = formData.message;
//   selectedRow.cells[2].innerHTML = formData.link_more;
//   selectedRow.cells[3].innerHTML = formData.link_image;
// }

// function onDelete(td) {
//   if (confirm("Do you want to delete this record?")) {
//     var row = td.parentElement.parentElement;
//     document.getElementById("storeList").deleteRow(row.rowIndex);
//   }
//   1;
//   resetForm();
// }

// // rest form
// function resetForm() {
//   document.getElementById("blog_name").value = "";
//   document.getElementById("message").value = "";
//   document.getElementById("link_more").value = "";
//   document.getElementById("link_image").value = "";
// }
