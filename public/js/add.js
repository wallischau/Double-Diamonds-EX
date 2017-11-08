// The code in add.js handles what happens when the user clicks the "Add a book" button.
// When user clicks add-btn
$("#form-submit").on("click", function(event) {
  event.preventDefault();
  
  // Make a newBook object
  var newCustomer = {
    email: $("#signup-email").val().trim(),
    name: $("#signup-username").val().trim(),
    phone: $("#signup-phone").val().trim(),
    payment: $("#payment").val().trim()

  };
  console.log(newCustomer);
  // Send an AJAX POST-request with jQuery
  $.post("/api/newCustomer", newCustomer)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });
  // Empty each input box by replacing the value with an empty string
  $("#signup-email").val("");
  $("#signup-username").val("");
  $("#signup-phone").val("");
  $("#payment").val("");
});