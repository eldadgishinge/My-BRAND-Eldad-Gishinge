const toggle_Btn = document.querySelector(".toggle_btn");
const toggle_BtnIcon = document.querySelector(".toggle_btn i");
const dropdown_menu = document.querySelector(".dropdown_menu");

toggle_Btn.onclick = function () {
  dropdown_menu.classList.toggle("open");
  const isOpen = dropdown_menu.classList.contains("open");
  toggle_BtnIcon.className = isOpen ? "fas fa-xmark" : "fas fa-bars";
};

function myfunc(event) {
  event.preventDefault();

  var blog_name = document.getElementById("blog_name").value;
  var message = document.getElementById("message").value;
  var link_more = document.getElementById("link_more").value;
  var link_image = document.getElementById("link_image").value;

  localStorage.setItem("ls_full_name", blog_name);
  localStorage.setItem("ls_message", message);
  localStorage.setItem("ls_link_more", link_more);
  localStorage.setItem("ls_link_image", link_image);
}
document.getElementById("blog-form").addEventListener("submit", myfunc);

var selectedRow = null;
function onFormSubmit() {
  event.preventDefault();
  var formData = readformData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm;
}

// retrieve the data
function readformData() {
  var formData = {};
  formData["blog_name"] = document.getElementById("blog_name").value;
  formData["message"] = document.getElementById("message").value;
  formData["link_more"] = document.getElementById("link_more").value;
  formData["link_image"] = document.getElementById("link_image").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  // Check if the table header exists
  if (!document.getElementById("storeList").tHead) {
    // Create the table header row
    var tableHeader = document.getElementById("storeList").createTHead();
    var headerRow = tableHeader.insertRow(0);
    headerRow.innerHTML =
      "<th>Name of blog</th><th>Message</th><th>link to learn more</th><th>link of Thumnail</th>";
  }

  // Append rows to the table body
  var tableBody = document.getElementById("storeList").tBodies[0];

  // Append the new row to the table body
  var newRow = tableBody.insertRow(tableBody.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.blog_name;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.message;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.link_more;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.link_image;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick ='onEdit(this)'> Edit </button> <button onClick ='onDelete(this)'> Delete </button> `;
}
//edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("blog_name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("message").value = selectedRow.cells[1].innerHTML;
  document.getElementById("link_more").value = selectedRow.cells[2].innerHTML;
  document.getElementById("link_image").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.blog_name;
  selectedRow.cells[1].innerHTML = formData.message;
  selectedRow.cells[2].innerHTML = formData.link_more;
  selectedRow.cells[3].innerHTML = formData.link_image;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    var row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
}

// rest form
function resetForm() {
  document.getElementById("blog_name").value = "";
  document.getElementById("message").value = "";
  document.getElementById("link_more").value = "";
  document.getElementById("link_image").value = "";
}

document.getElementById("blog-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  let blog_name = document.getElementById("blog_name").value;
  let message = document.getElementById("message").value;
  let link_more = document.getElementById("link_more").value;
  let link_image = document.getElementById("link_image").value;
  let name_error = document.getElementById("name_error");
  let message_error = document.getElementById("message_error");
  let link1 = document.getElementById("link1");
  let link2 = document.getElementById("link2");

  let message_name = [];
  let message_message = [];
  let message_link = [];

  if (blog_name === "" || blog_name == null) {
    message_name.push("Blog name is required");
    name_error.innerHTML = message_name;
  } else {
    name_error.innerHTML = ""; // Clear error message if valid
  }

  if (message === "" || message == null) {
    message_message.push("Message is required");
    message_error.innerHTML = message_message;
  } else {
    message_error.innerHTML = ""; // Clear error message if valid
  }

  if (link_more === "" || link_more == null) {
    message_link.push("Link for more information is required");
    link1.innerHTML = message_link;
  } else {
    link1.innerHTML = ""; // Clear error message if valid
  }

  if (link_image === "" || link_image == null) {
    message_link.push("Link for image is required");
    link2.innerHTML = message_link;
  } else {
    link2.innerHTML = ""; // Clear error message if valid
  }

  // If all fields are valid, proceed with inserting the record
  if (
    blog_name !== "" &&
    message !== "" &&
    link_more !== "" &&
    link_image !== ""
  ) {
    let formData = {
      blog_name: blog_name,
      message: message,
      link_more: link_more,
      link_image: link_image,
    };

    insertNewRecord(formData);
    resetForm();
  }
});

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

// ---------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".comment-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Create HTML elements for the new comment
    const newComment = document.createElement("div");
    newComment.classList.add("comment21");

    const commentContent = `
            <h4><strong>${name}</strong> ${new Date().toLocaleDateString()}</h4>
            <p>${comment}</p>
          `;

    newComment.innerHTML = commentContent;

    // Insert the new comment into the comment display
    const commentDisplay = document.querySelector(".comment-display");
    commentDisplay.appendChild(newComment);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  });
});
