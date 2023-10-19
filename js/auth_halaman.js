import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
  const token = getCookie("token");

  if (!token && previousPageURL) {
    Swal.fire({
      icon: "warning",
      title: "Peringatan",
      text: "Anda belum login !",
      confirmButtonText: "OK",
    }).then(() => {
      // Redirect ke halaman login
      window.location.href = erfahtech / apps / pages / auth / login.html;
    });
  }
});
