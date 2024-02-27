const toggle_Btn = document.querySelector(".toggle_btn");
const toggle_BtnIcon = document.querySelector(".toggle_btn i");
const dropdown_menu = document.querySelector(".dropdown_menu");

toggle_Btn.onclick = function () {
  dropdown_menu.classList.toggle("open");
  const isOpen = dropdown_menu.classList.contains("open");
  toggle_BtnIcon.className = isOpen ? "fas fa-xmark" : "fas fa-bars";
};

document
  .getElementById("blog-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var blog_name = document.getElementById("blog_name").value;
    var message = document.getElementById("message").value;
    var link_more = document.getElementById("link_more").value;
    var link_image = document.getElementById("link_image").value;
    var id = 0;
    for (let i = 0; i < message.length; i++) {
      id = id + 1;
    }

    var obj = { id, blog_name, message, link_image, link_more };

    var mystorage = JSON.parse(localStorage.getItem("mystorage")) || [];
    mystorage.push(obj);
    localStorage.setItem("mystorage", JSON.stringify(mystorage));

    alert("Form submitted and stored to local storage!");
  });

// Retrieve the stored items array from local storage

// Retrieve the stored items array from local storage
var mystorage = JSON.parse(localStorage.getItem("mystorage")) || [];

var hope = "";
for (var i = 0; i < mystorage.length; i++) {
  hope += `<h1>${mystorage[i].text}</h1> <a href="${mystorage[i].link}"> youtube</a> <img src="${mystorage.img}" alt="">`;
}

// Display the stored items
document.getElementById("hope").innerHTML = hope;

function validForrm() {
  let blog_name = document.getElementById("blog_name").value;
  let message = document.getElementById("message").value;
  let link_more = document.getElementById("link_more").value;
  let link_image = document.getElementById("link_image").value;
  let name_error = document.getElementById("name_error");
  let message_error = document.getElementById("message_error");
  let link1 = document.getElementById("link1");
  let link2 = document.getElementById("link2");

  let isValid = true;

  // Validation logic
  if (blog_name === "" || blog_name == null) {
    name_error.innerHTML = "Blog name is required";
    isValid = false;
  } else {
    name_error.innerHTML = ""; // Clear error message if valid
  }

  if (message === "" || message == null) {
    message_error.innerHTML = "Message is required";
    isValid = false;
  } else {
    message_error.innerHTML = ""; // Clear error message if valid
  }

  if (link_more === "" || link_more == null) {
    link1.innerHTML = "Link for more information is required";
    isValid = false;
  } else {
    link1.innerHTML = ""; // Clear error message if valid
  }

  if (link_image === "" || link_image == null) {
    link2.innerHTML = "Link for image is required";
    isValid = false;
  } else {
    link2.innerHTML = ""; // Clear error message if valid
  }

  // If all fields are valid, proceed with inserting the record
  if (isValid) {
    let formData = {
      blog_name: blog_name,
      message: message,
      link_more: link_more,
      link_image: link_image,
    };

    insertNewRecord(formData);
    resetForm();
    alert("Form submitted and stored to local storage!");
  }
}

// Variable to keep track of the number of records
// Retrieve the stored items array from local storage

function readAll() {
  var tabledata = document.querySelector(".data_table");
  var object = localStorage.getItem("mystorage");
  var objectdata = JSON.parse(object);
  var elements = "";
  for (var i = 0; i < objectdata.length; i++) {
    elements += `<tr>
      <td>${objectdata[i].blog_name}</td>
      <td>${objectdata[i].message}</td>
      <td>${objectdata[i].link_more}</td>
      <td>${objectdata[i].link_image}</td>
      <td>
        <button class="edit" onclick="edit(${objectdata[i].id})">Edit</button>
        <button class="delete" onclick="deleteItem(${objectdata[i].id})">Delete</button>
      </td>
    </tr>`;
  }

  tabledata.innerHTML = elements;
}

function edit(id) {
  // Retrieve the stored items array from local storage
  var mystorage = JSON.parse(localStorage.getItem("mystorage")) || [];

  // Find the record with the specified ID
  var record = mystorage.find((record) => record.id === id);

  // Pre-populate the form fields with the record's data
  document.getElementById("blog_name").value = record.blog_name;
  document.getElementById("message").value = record.message;
  document.getElementById("link_more").value = record.link_more;
  document.getElementById("link_image").value = record.link_image;

  // Update the form's action attribute to point to the edit endpoint
  document.getElementById("blog-form").action = `/edit/${id}`;
}

function deleteItem(id) {
  var mystorage = JSON.parse(localStorage.getItem("mystorage")) || [];
  mystorage = mystorage.filter(function (item) {
    return item.id !== id;
  });
  localStorage.setItem("mystorage", JSON.stringify(mystorage));
  readAll(); // refresh the table
}

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
//}

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
