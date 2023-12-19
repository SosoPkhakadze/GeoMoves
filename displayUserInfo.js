document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById('mainContent');
  
    // Retrieve user information from localStorage
    const storedUserInformation = localStorage.getItem('userInformation');
  
    if (storedUserInformation) {
      const userInformation = JSON.parse(storedUserInformation);
  
      // Display user information in the account section
      mainContent.innerHTML = `
        <h2>User Information</h2>
        <p><strong>Full Name:</strong> ${userInformation.fullName}</p>
        <p><strong>Username:</strong> ${userInformation.username}</p>
        <p><strong>Email:</strong> ${userInformation.email}</p>
        <p><strong>Phone Number:</strong> ${userInformation.phoneNumber}</p>
        <p><strong>Password:</strong> ${userInformation.password}</p>
        <p><strong>Gender:</strong> ${userInformation.gender}</p>
      `;
    }
  });
  