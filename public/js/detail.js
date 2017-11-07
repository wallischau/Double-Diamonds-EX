$(document).ready(function(){
/* Code for extracting the input parameters from the url */
 var parameters = window.location.search.substring(1).split("&");
 var p1 = parameters[0].split("=");
 var id = unescape(p1[1]);
 // var pr_1 = para_1.substr(0,para_1.length-1);
 console.log(parameters);
console.log(id);

var item_quantity = 1;
var item_duration = 1;

$.get("/api/" + id, function(data){
	console.log(data,  " the data should be here");
	// for(var i=0; i<1; i++){
     var newPanelOne = $(`
     	 <div class="row ">
                    <!-- Shop Item -->
                    <div class="col-md-6 mb-sm-60">

                        <div class="shop-detail-item">
                            <!--Item Images-->
                            <div class="sp-wrap">
                                    <img src=${data.pic} alt="">
                            </div>

                        </div>
                    </div>
                    <!-- End Shop Item -->

                    <!-- Shop info -->
                    <div class="col-md-6">
                        <div class="shop-detail-info">
                            <h4>${data.equipment_name}</h4>
                            <div class="shop-item-price mtb-15 ptb-15"><span>${data.price}</span></div>
                            <hr />
                            <p class="ptb-15">${data.description}</p>
                            <ul class="project-detail-block ptb-15">
                                <li>
                                    <p>
                                        <strong class="dark-color">Brand :</strong><span>${data.equipment_brand}</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong class="dark-color">SKU :</strong><span>#${data.sku}</span>
                                    </p>
                                </li>
                            </ul>
                        <div class="row">
                            <div class = "col-md-6">
                             <div class="cart-box">
                                    <label class="inline" for="qty"># of Items to Rent:</label>
                                    <input id="item-quantity" type="number" name="qty" value="1" max="50" min="1" class="input-lg" required="required" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cart-box">
                                    <label class="inline" for="qty"># Days to Rent :</label>
                                    <input id="item-duration" type="number" name="daysToRent" value="1" max="10" min="1" class="input-lg" required="required" />
                                </div>
                            </div>
                        </div>
                    </div>
            <!--Date P End  -->
                            <br />
                              <form action="shop-checkout.html", method="GET"> 
                                <input type="hidden" name="item_id" value=${data.id}>
                                <input type="hidden" name="item_quantity" value=${item_quantity}>
                                <input type="hidden" name="item_duration" value=${item_duration}>
                                <div class="btn btn-lg btn-black form-full"> <i class="fa fa-shopping-cart left" style="color: white"></i>
                                	<input type="submit" name="item_box" value="Rent Me">
                                </div>
                              </form>
                            <ul class="list-none-ib ptb-15 text-cap">
                                <li class="mr-30"><a class=""><i class="fa fa-heart left"></i>Add to wishlist</a></li>
                                <li><a><i class="fa fa-share-alt left"></i>Share</a></li>
                            </ul>
                    <!-- End Shop info -->
                      </div>
                    </div>
     		
     	`);

		$('#well-section-shop').append(newPanelOne);

	// }
}); //.get

//$("#item-quantity").on("change", function() {
$(document).on("change", "#item-quantity", function() {
        item_quantity = $(this).val();
        console.log(item_quantity);
        sessionStorage.setItem("quantity", item_quantity);

});
$(document).on("change","#item-duration", function() {
        item_duration = $(this).val();
        console.log(item_duration);
        sessionStorage.setItem("duration", item_duration);
});




});//ready