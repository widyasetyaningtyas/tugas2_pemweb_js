// script.js

// Mendapatkan elemen dari DOM
const registerButton = document.getElementById('registerButton');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Fungsi untuk mengecek kesamaan password
function checkPasswords() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert("Password tidak sama");
    } else {
        alert("Password sesuai");
    }
}

// Menambahkan event listener ke tombol Register
registerButton.addEventListener('click', checkPasswords);
