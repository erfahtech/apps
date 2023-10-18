function login() {
    const email = document.getElementById("emaillogin").value;
    const password = document.getElementById("passwordlogin").value;

    fetch("https://asia-southeast2-urse-project.cloudfunctions.net/urse-post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })

        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                const expiryTime = 3600; // 1 hour (in seconds)
                const now = new Date();
                now.setTime(now.getTime() + expiryTime * 1000);
                document.cookie = `token=${data.token
                    }; expires=${now.toUTCString()}; path=/`;

                window.location.href = "index.html";
            } else {
                swal.fire({
                    title: "Login Gagal",
                    text: "error",
                    icon: "error",
                    confirmButtonText: "OK"
                })
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            swal.fire({
                icon: "error",
                title: "error",
                text: "error",
                icon: "error",
            })
        });
}

console.log(data.message);