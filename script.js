document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    console.log('Login attempted for:', email);
    // Here, you will later add code to actually handle the login
});
