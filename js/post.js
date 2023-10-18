// import { postWithToken } from "https://jscroot.github.io/api/croot.js";
// import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import PostSignUp from "./postfunction.js";
import Spinner from "spin.js";

// Inisialisasi Spinner
const spinner = new Spinner({
  lines: 12, // Jumlah garis dalam animasi loading
  length: 10, // Panjang garis
  width: 5, // Lebar garis
  radius: 20, // Radius animasi
  color: "blue", // Warna animasi
});

// Fungsi untuk menampilkan animasi loading
function showLoading() {
  const target = document.getElementById("buttonlogin");
  spinner.spin(target);
  target.style.display = "block";
}

// Fungsi untuk menyembunyikan animasi loading
function hideLoading() {
  const target = document.getElementById("buttonlogin");
  spinner.stop();
  target.style.display = "none";
}

// Panggil fungsi PostSignUp dengan animasi loading
showLoading();
PostSignUp();
