document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector('form');
  
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Collect user input data
      const fullName = document.querySelector('input[placeholder="Enter your name"]').value;
      const username = document.querySelector('input[placeholder="Enter your username"]').value;
      const email = document.querySelector('input[placeholder="Enter your email"]').value;
      const phoneNumber = document.querySelector('input[placeholder="Enter your number"]').value;
      const password = document.querySelector('input[placeholder="Enter your password"]').value;
      const confirmPassword = document.querySelector('input[placeholder="Confirm your password"]').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
  
      // Save user information to localStorage
      const userInformation = {
        fullName,
        username,
        email,
        phoneNumber,
        password,
        gender,
      };
  
      localStorage.setItem('userInformation', JSON.stringify(userInformation));
  
      // Redirect to account.html
      window.location.href = 'index.html';
    });
  });
  