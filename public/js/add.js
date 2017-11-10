$(document).ready(function(){

/* Code for extracting the input parameters from the url */
 var parameters = window.location.search.substring(1).split("&");
 if (parameters.length > 1) {

    var p1 = parameters[0].split("=");
    var p2 = parameters[1].split("=");
    var p3 = parameters[2].split("=");
    var p4 = parameters[3].split("=");
    var p5 = parameters[4].split("=");
    var id = unescape(p1[1]);
    var equipment_name = unescape(p2[1]);
    equipment_name = equipment_name.replace(/\+/g, ' ');
    var quantity = unescape(p3[1]);
    var duration = unescape(p4[1]);
    var cost = unescape(p5[1]);
    console.log(parameters);
 }

// The code in add.js handles what happens when the user clicks the "Add a book" button.
// When user clicks add-btn
$("#form-submit").on("click", function(event) {
  event.preventDefault();
  
  // Make a newBook object
  var newCustomer = {
    email: $("#signup-email").val().trim(),
    name: $("#signup-username").val().trim(),
    phone: $("#signup-phone").val().trim(),
    payment: $("#paymentMethod").val().trim()

  };
  console.log(newCustomer);
  // Send an AJAX POST-request with jQuery
  $.post("/api/newCustomer", newCustomer)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });
  //update modal card
  var newDiv = $("<div>");
  newDiv.html(`Item: ${equipment_name} <br> Quantity: ${quantity} <br>
               Duration: ${duration} day(s) <br> Cost: $${cost}`);
  $(".modal-body").append(newDiv);

  // Empty each input box by replacing the value with an empty string
  $("#signup-email").val("");
  $("#signup-username").val("");
  $("#signup-phone").val("");
  $("#payment").val("");
});
});//ready