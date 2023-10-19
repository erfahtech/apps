import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
  const token = getCookie("token");

  // Mendapatkan URL sebelumnya dari local storage (jika ada)
  const previousPageURL = localStorage.getItem("previousPageURL");

  if (!token && previousPageURL) {
    Swal.fire({
      icon: "warning",
      title: "Peringatan",
      text: "Anda belum login !",
      confirmButtonText: "OK",
    }).then(() => {
      // Redirect ke halaman login
      window.location.href = "https://github.com/erfahtech/apps/pages/auth/login.html";
    });
  }
});
