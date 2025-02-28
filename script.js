// ===   NAV  ===
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
// ===  PASSWORD  ===
function checkPassword() {
    const password = document.getElementById('password').value;
    const strengthElement = document.getElementById('password-strength');
    const recommendations = document.getElementById('password-recommendations');
    const character = document.getElementById('character');
    const reasonElement = document.getElementById('password-reason');

    const commonWords = [/password/i, /1234/, /admin/i, /letmein/i, /qwerty/i, /azerty/i, /welcome/i, /monde/i];
    const serviceNamePatterns = [/CréditAgricole/i, /Hotmail/i, /MaSociete/i, /Adminserveur/i, /MDPmessagerie/i];

    let strength = 'Faible';
    let reason = "Votre mot de passe est trop court ou trop simple.";

    if (password.length >= 10 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
        !commonWords.some(word => word.test(password)) &&
        !serviceNamePatterns.some(pattern => pattern.test(password))
    ) {
        strength = 'Fort';
        reason = "Votre mot de passe est long, complexe et difficile à deviner.";
    } else if (password.length >= 8) {
        strength = 'Moyen';
        reason = "Ajoutez des caractères spéciaux, des majuscules et des chiffres pour le renforcer.";
    }

    strengthElement.textContent = strength.charAt(0).toUpperCase() + strength.slice(1);
    strengthElement.className = strength;
    reasonElement.textContent = reason;

    recommendations.style.display = strength === 'Fort' ? 'none' : 'block';

    if (strength === 'Faible') {
        character.src = 'faible.jpg';
        character.className = 'character faible-character';
    } else if (strength === 'Moyen') {
        character.src = 'moyen.jpg';
        character.className = 'character moyen-character';
    } else if (strength === 'Fort') {
        character.src = 'fort.jpg';
        character.className = 'character fort-character';
    }
}

// Afficher/Masquer le mot de passe avec effet visuel
document.getElementById('toggle-password').addEventListener('change', function() {
    const passwordInput = document.getElementById('password');
    const toggleText = document.getElementById('toggle-password-text');

    if (this.checked) {
        passwordInput.type = 'text';
        toggleText.textContent = 'Masquer le mot de passe';
    } else {
        passwordInput.type = 'password';
        toggleText.textContent = 'Afficher le mot de passe';
    }
});



document.addEventListener("DOMContentLoaded", () => {
    console.log("Documentation chargée avec succès !");
  });
