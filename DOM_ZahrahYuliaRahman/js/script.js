document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Simulasi login: username = admin, password = 1234
    if ((username === "admin" || username === "admin@gmail.com") && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login berhasil! Selamat datang.";
    } else {
        message.style.color = "red";
        message.textContent = "Login gagal! Username atau password salah.";
    }
});
