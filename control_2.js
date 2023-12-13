//generador_de_contraseñas_aleatorias.
    document.getElementById("generatePassword").addEventListener("click", function() {
        var length = parseInt(document.getElementById("passwordLength").value);
        var uppercase = document.getElementById("uppercase").checked;
        var lowercase = document.getElementById("lowercase").checked;
        var numbers = document.getElementById("numbers").checked;
        var specialChars = document.getElementById("specialChars").checked;

        var charset = "";
        if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) charset += "0123456789";
        if (specialChars) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

        if (charset === "") {
            alert("Debes seleccionar al menos un tipo de caracter para generar la contraseña.");
            return;
        }

        var password = generatePassword(length, charset);
        document.getElementById("result").textContent = "Contraseña generada: " + password;
    });

    function generatePassword(length, charset) {
        var password = "";
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }
        return password;
    }