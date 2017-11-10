$(document).ready(function(){
/* Code for extracting the input parameters from the url */
var parameters = window.location.search.substring(1).split("&");
console.log(parameters);
if (parameters.length > 1) {

    var p1 = parameters[0].split("=");
    var p2 = parameters[1].split("=");
    var p3 = parameters[2].split("=");
    var id = unescape(p1[1]);

    console.log(parameters);
    console.log(id);
}
var quantity = sessionStorage.getItem("quantity");
var duration = sessionStorage.getItem("duration");

var cost = 0;
var price = 0;
var subtotal = 0;
const TAXRATE = 0.05;

$.get("/api/" + id, function(data){
 console.log(data, "the data should be here");
 price = data.price;
 cost = quantity * duration * price;	
     var newPanelTwo = $(`
        
                                <td class="hidden-xs">
                                    <a href="">
                                        <img src="img/fishw.jpg" />
                                    </a>
                                </td>
                                <td>
                                    <h6><a href="#">${data.equipment_name}</a></h6>
                                    <p class="mt-0">
                                        <small>SKU : #${data.sku}</small>
                                        <small>Color : Purple Grid Topsheet</small>
                                        <small>Size : See description</small>
                                    </p>
                                </td>
                                <td class="hidden-xs">${data.price}</td>
                                <td>
                                    <form>
                                        <input id="item-quantity" type="number" value="${quantity}" max="50" min="1" style="width: 100%; max-width: 70px;" class="input-md">
                                    </form>
                                </td>
                                <td>
                                    <form>
                                        <input id="item-duration" type="number" value="${duration}" max="50" min="1" style="width: 100%; max-width: 70px;" class="input-md">
                                    </form>
                                </td>

                                <td id="cost">$${cost}</td>
                                <td><a><i class="fa fa-times-circle"></i></a></td>
                           
         
         `);

    $('#well-section-table').append(newPanelTwo);
    //update cart total
    updateTotalCost();

    //format string
    var equipment_name = data.equipment_name.replace(/ /g,'+');
    console.log(equipment_name);
    var checkoutButton = $(`
            <form action="confirmation.html", method="GET"> 
              <input type="hidden" name="item_id" value=${data.id}>
              <input type="hidden" name="item-name" value=${equipment_name}>
              <input type="hidden" name="item_quantity" value=${quantity}>
              <input type="hidden" name="item_duration" value=${duration}>
              <input type="hidden" name="item_cost" value=${cost}>
              <div class="btn btn-lg btn-color-b form-full"> 
                <input type="submit" class= "btn btn-color-b" name="item_box" value="Proceed to Checkout" style="background-color: Transparent; border: none; margin: 0px;">
                <i class="fa fa-chevron-right right"></i>
              </div>
            </form>
        `);
    $('#checkout-button').append(checkoutButton);

}); //get /api

function updateTotalCost() {
     subtotal = cost;
     var tax = subtotal * TAXRATE;
     var total = subtotal + tax;

     console.log(subtotal);
     console.log(tax);
     console.log(total);
     //update subtotal
     $("#sub-total").html(`$${subtotal}`);
     $("#tax").html(`$${tax}` );
     $("#total-cost").html(`$${total}`);

}


$(document).on("click", "#cart-update", function() {
    quantity = $("#item-quantity").val();
    console.log(quantity);
    sessionStorage.setItem("quantity", quantity);
    duration = $("#item-duration").val();
    console.log(duration);
    sessionStorage.setItem("duration", duration);
    //update total per equipment
    cost = quantity * duration * price;    
    $("#cost").html(`$${cost}`);
    //update total all
    updateTotalCost();
});

});//ready