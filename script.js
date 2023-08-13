document.addEventListener("DOMContentLoaded", function() {

  const form = document.querySelector("form");
  const confirmationBox = document.getElementById("confirmationBox");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone-number").value;


    if (name && email && address && phone) {
      confirmationMessage.textContent = `Thank you for shopping with us, ${name}! Your order has been placed. Your items will be at ${address} within 3 days.`;
    } else {
      confirmationMessage.textContent = "Please fill out all fields.";
    }

    confirmationBox.style.display = "block";
  });
});
