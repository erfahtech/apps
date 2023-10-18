function auth_login(){
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token){
        window.location.href = "login.html";
    } else {
        fetch("http://localhost:8080/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === "success"){
                console.log("Success");
            } else {
                window.location.href = "login.html";
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            window.location.href = "login.html";
        });
    }
}

function redirect_login(){
    window.location.href = "login.html";
}