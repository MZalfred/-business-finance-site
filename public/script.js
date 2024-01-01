document.getElementById('your-form-id').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email.');
        event.preventDefault();
    }
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
