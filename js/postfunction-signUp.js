import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
// import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function postSignUp() {
  let target_url = "https://asia-southeast2-urse-project.cloudfunctions.net/urse-insertUser";
  let datainjson = {
    email: getValue("emailsignup"),
    username: getValue("usernamesignup"),
    password: getValue("passwordsignup"),
  };

  fetch(target_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datainjson),
  })
    .then((response) => response.json())
    .then((result) => {
      responseData(result);
    })
    .catch((error) => {
      // Handle errors (e.g., network issues)
      console.error("Error:", error);
    });
}

function responseData(result) {
  if (result) {
    // Tampilkan SweetAlert berhasil signUp
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You have successfully logged in.",
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        window.location.href = "login.html";
      }
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: result.message,
    });
  }
}
