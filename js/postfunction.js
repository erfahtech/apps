import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url = "https://asia-southeast2-urse-project.cloudfunctions.net/urse-post";
  let tokenkey = "token";
  let tokenvalue = "c49482e6de1fa07a349f354c2277e11bc7115297a40a1c09c52ef77b905d07c4";
  let datainjson = {
    email: getValue("emaillogin"),
    password: getValue("passwordlogin"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}

function responseData(result) {
  if (result.token) {
    // Jika memiliki token, simpan token di cookie
    setCookieWithExpireHour("token", result.token, 2);
    // Simpan pesan hasil respons di local storage
    // localStorage.setItem("message", result.message);

    // Tampilkan SweetAlert berhasil login
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You have successfully logged in.",
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        // Redirect to homePelamar.html setelah menekan OK pada SweetAlert
        window.location.href = "dashboard.html";
      }
    });
  } else {
    // Jika tidak memiliki token, tampilkan SweetAlert pesan kesalahan
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: result.message,
    });
  }
}
