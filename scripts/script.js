function login() {
    const email = document.getElementById('emailBox').value;
    const password = document.getElementById('passBox').value;

    var userEmail = "admin@patrimonio.com";
    var userPassword = "devteam24"
    
    if(email.length == 0 || password.length == 0) {
        Swal.fire({
            icon: "error",
            title: "Ups",
            text: "Debes completar los campos."
          });
    } else {
        if (email != userEmail || password != userPassword) {
            Swal.fire({
                icon: "error",
                title: "Ups",
                text: "Correo o contraseña incorrecta."
              });
        } else {
            document.getElementById('loginBtn').href = "/welcome.html"
        }
    }
}