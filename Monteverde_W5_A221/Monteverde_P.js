function password() {
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('message');

    if (newPassword === confirmPassword) {
        message.textContent = "Passwords successfully changed!";
        message.className = "success";
    } else {
        message.textContent = "Passwords do not match. Please try again.";
        message.className = "error";
    }
}
