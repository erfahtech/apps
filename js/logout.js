// function logout() {
//     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     window.location.href = "./index.html";
// }

function logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You session will disappear!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        window.location.href = "../index.html";
      }
    });
  }