const usernameField = document.querySelector("#usernameField");
const usernameFeedbackArea = document.querySelector(".username_feedback");
const emailField = document.querySelector("#emailField");
const emailFeedbackArea = document.querySelector(".email_feedback");
usernameField.addEventListener("keyup", (e) => {
  const usernameVal = e.target.value;
  usernameField.classList.remove("is-invalid");
  usernameFeedbackArea.style.display = "none";
  if (usernameVal.length > 0) {
    fetch("http://127.0.0.1:8000/authentication/validate-username", {
      body: JSON.stringify({ username: usernameVal }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.username_error) {
          usernameField.classList.add("is-invalid");
          usernameFeedbackArea.style.display = "block";
          usernameFeedbackArea.innerHTML = `<p>${data.username_error}</p>`;
        }
      });
  }
});

emailField.addEventListener("keyup", (e) => {
  const emailVal = e.target.value;
  emailField.classList.remove("is-invalid");
  emailFeedbackArea.style.display = "none";
  if (emailVal.length > 0) {
    fetch("http://127.0.0.1:8000/authentication/validate-email", {
      body: JSON.stringify({ email: emailVal }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.email_error) {
          emailField.classList.add("is-invalid");
          emailFeedbackArea.style.display = "block";
          emailFeedbackArea.innerHTML = `<p>${data.email_error}</p>`;
        }
      });
  }
});
