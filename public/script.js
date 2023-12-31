document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    console.log('Login attempted for:', email);
    // Here, you will later add code to actually handle the login
});
// Assuming you have a modal in your HTML with an ID of 'myModal'
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const close = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}
