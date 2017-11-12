/*****************************************************************/
/* add.js                                                        */
/* Description: js file for confirmation.html                    */
/* Date: 10/28/2017                                              */
/* Author: Wallis Chau, Megan Landahl, Ed Quintana, Kelly Wenzel */
/*****************************************************************/

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


// The code in add.js handles what happens when the user clicks the "reservation" button.
// When user clicks add-btn
$("#form-submit").on("click", function(event) {
  event.preventDefault();
  
  //split name into first and last name
  var nameArray = $("#signup-username").val().trim().split(" ");
  // Make a newBook object
  var newCustomer = {
    email: $("#signup-email").val().trim(),
    last_name: nameArray[1],
    first_name: nameArray[0],
    phone: $("#signup-phone").val().trim()

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
  var randomNumber1 = Math.floor((Math.random() * 10000) + 1);
  var randomNumber2 = Math.floor((Math.random() * 10000) + 1);
  $(".modal-title").html(`Confirmation #${randomNumber1}-${randomNumber2}`);
  
  $('#myModal').modal("show");
  // Empty each input box by replacing the value with an empty string
  $("#signup-email").val("");
  $("#signup-username").val("");
  $("#signup-phone").val("");
  $("#payment").val("");

  return false;
});

$('#myModal').on('shown.bs.modal', function (e) {
  e.preventDefault();
  console.log("modal shown");
});

});//ready