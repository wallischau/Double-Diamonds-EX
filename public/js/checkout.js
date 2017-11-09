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