// Function to generate a random user
async function generateUser() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];
  
      const formattedUser = {
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        country: user.location.country,
        nationality: user.nat,
        email: user.email,
        dob: user.dob.date.substring(0, 10),
        image: user.picture.large
      };
  
      return formattedUser;
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  // Function to update the user profile cards with new user data
  async function updateProfileCards() {
    for (let i = 1; i <= 3; i++) {
      const user = await generateUser();
      document.getElementById(`user-image${i}`).src = user.image;
      document.getElementById(`user-name${i}`).textContent = user.name;
      document.getElementById(`user-gender${i}`).textContent = `Gender: ${user.gender}`;
      document.getElementById(`user-country${i}`).textContent = `Country: ${user.country}`;
      document.getElementById(`user-nationality${i}`).textContent = `Nationality: ${user.nationality}`;
      document.getElementById(`user-email${i}`).textContent = `Email: ${user.email}`;
      document.getElementById(`user-dob${i}`).textContent = `Date of Birth: ${user.dob}`;
    }
  }
  
  // Event listener for the "Generate Users" button
  document.getElementById("generate-users").addEventListener("click", function() {
    updateProfileCards();
  });
  
  // Update the user profile cards every 3 seconds
  setInterval(function() {
    updateProfileCards();
  }, 3000);
  