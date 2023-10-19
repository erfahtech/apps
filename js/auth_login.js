// import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// document.addEventListener("DOMContentLoaded", function () {
//   // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
//   const token = getCookie("token");

//   // Mendapatkan URL sebelumnya dari local storage (jika ada)
//   const previousPageURL = localStorage.getItem("previousPageURL");

//   // Jika ada token, kembalikan ke halaman sebelumnya
//   if (token && previousPageURL) {
//     Swal.fire({
//       icon: "info",
//       title: "Informasi",
//       text: "Anda sudah login. Kembali ke halaman sebelumnya.",
//       confirmButtonText: "OK",
//     }).then(() => {
//       // Redirect ke halaman sebelumnya
//       window.location.href = previousPageURL;
//     });
//   }
// });

import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

document.addEventListener("DOMContentLoaded", function () {
  const token = getCookie("token");
  const previousPageURL = localStorage.getItem("previousPageURL");

  if (!token && previousPageURL) {
    Swal.fire({
      icon: "warning",
      title: "Peringatan",
      text: "Anda belum login !",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.href = "https://erfahtech.github.io/apps/pages/auth/login.html";
    });
  } else if (token && previousPageURL) {
    Swal.fire({
      icon: "info",
      title: "Informasi",
      text: "Anda sudah login. Kembali ke halaman sebelumnya.",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.href = previousPageURL;
    });
  }
});
