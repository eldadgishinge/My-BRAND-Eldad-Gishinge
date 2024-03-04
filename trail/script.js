function storedata() {
  var text = document.getElementById("text").value;
  var link = document.getElementById("link").value;
  var img = document.getElementById("img").value;

  // Create an object to store the inputted content
  var obj = { text, link, img };

  // Check if there are any existing stored items
  var storedItems = JSON.parse(localStorage.getItem("storedItems")) || [];

  // Add the new object to the stored items array
  storedItems.push(obj);

  // Store the updated stored items array
  localStorage.setItem("storedItems", JSON.stringify(storedItems));
}

// Retrieve the stored items array from local storage
var storedItems = JSON.parse(localStorage.getItem("storedItems")) || [];

// Create a string to display the stored items
var displaycontent = "";

// Loop through the stored items array and add each item to the display content string
for (var i = 0; i < storedItems.length; i++) {
  displaycontent += `<h1>${storedItems[i].text}</h1> <a href="${storedItems[i].link}"> youtube</a> <img src="${storedItems[i].img}" alt="">`;
}

// Display the stored items
document.getElementById("displaycontent").innerHTML = displaycontent;
