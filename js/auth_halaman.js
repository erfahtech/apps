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
      const currentLocation = window.location.pathname;
      if (currentLocation.includes("user")) {
        window.location.href = "../auth/login.html";
      } else {
        window.location.href = "pages/auth/login.html";
      }
    });
  }
});
