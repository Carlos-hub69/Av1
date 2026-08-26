const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const senha =
            document.getElementById("senha").value;

        if (email && senha) {

            localStorage.setItem(
                "usuario",
                email
            );

            window.location.href = "index.html";

        } else {

            alert("Preencha todos os campos.");

        }

    });

}
No final do script.js:
if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register(
                    "service-worker.js"
                );

        }
    );

}