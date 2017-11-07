$(document).ready(function(){
/* Code for extracting the input parameters from the url */
 var parameters = window.location.search.substring(1).split("&");
 var p1 = parameters[0].split("=");
 var p2 = parameters[1].split("=");
 var p3 = parameters[2].split("=");
 var id = unescape(p1[1]);
 // var quantity = unescape(p2[1]);
 // var duration = unescape(p3[1]);
 // var pr_1 = para_1.substr(0,para_1.length-1);

 console.log(parameters);
console.log(id);
// console.log(quantity);
// console.log(duration);

var quantity = sessionStorage.getItem("quantity");
var duration = sessionStorage.getItem("duration");

var cost = 0;
var subtotal = 0;
var tax = 0;
var total = 0;
var taxRate = 0.05;

$.get("/api/" + id, function(data){
 console.log(data, "the data should be here");
 cost = quantity * duration * data.price;	
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
                                        <input type="number" value="${quantity}" max="50" min="1" style="width: 100%; max-width: 70px;" class="input-md">
                                    </form>
                                </td>
                                <td>
                                    <form>
                                        <input type="number" value="${duration}" max="50" min="1" style="width: 100%; max-width: 70px;" class="input-md">
                                    </form>
                                </td>

                                <td>$${cost}</td>
                                <td><a><i class="fa fa-times-circle"></i></a></td>
                           
         
         `);

     $('#well-section-table').append(newPanelTwo);
     subtotal += cost;
     tax = subtotal * taxRate;
     total = subtotal + tax;

     console.log(subtotal);
     console.log(tax);
     console.log(total);
     //update subtotal
     $("#sub-total").html(`$${subtotal}`);
     $("#tax").html(`$${tax}` );
     $("#total-cost").html(`$${total}`);
}); //get /api


$(document).on("click", "#cart-update", function() {

});

});//ready