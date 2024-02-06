document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Perform further validation or registration process here

    alert("Registration Successful!\nUsername: " + username + "\nEmail: " + email);
    document.getElementById('registrationForm').reset();
});
