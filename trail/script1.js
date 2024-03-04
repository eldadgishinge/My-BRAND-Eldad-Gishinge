const form = document.querySelector("#form2");
const username = document.querySelector("#form-name");
const email = document.querySelector("#form-email");
const subject = document.querySelector("#form-subject");
const formMessage = document.querySelector("#message-1");

const userFeedback = JSON.parse(localStorage.getItem("userFeedback")) ?? [];

function addFeedback(e) {
  currentData = {
    username: username.value,
    email: email.value,
    subject: subject.value,
    theFeedback: formMessa,
  };
  userFeedback.push(currentData);
  localStorage.setItem("userFeedback", JSON.stringify("userFeedback"));
}
