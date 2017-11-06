$(document).ready(function(){
$.get("/api/all", function(data){
	console.log(data + "the data should be here");
	for(var i=0; i< 8; i++){
     var newPanel = $(`
     	 <div class="nf-item col-md-3 col-sm-6 mb-30">
                        <div class="item-box">
                            <!-- Shop item images -->
                            <div class="shop-item">
                                <div class="item-img">
                                    <img src="img/fishw.jpg" />
                                </div>
                                <div class="item-mask">
                                    <div class="item-mask-detail">
                                        <div class="item-mask-detail-ele">
                                            <a id="rent-me" class="btn btn-line-xs btn-white-line" ><i class="fa fa-shopping-cart"></i>Rent Me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Shop item images -->
                            <!-- Shop item info -->
                            <div class="shop-item-info">
                                <a href="shop-detail.html">
                                    <h6 class="shop-item-name">${data[i].equipment_name}</h6>
                                <div class="shop-item-price"><span>${data[i].price}</span></div>
                                <p>some info?</p>
                            </div>
                            <!-- Shop item info -->
                        </div>
                    </div>
     		
     	`);

		$('#well-section').append(newPanel);

	}
});


$.get("/api/all", function(data){
 console.log(data + "the data should be here");
 for(var i=0; i< 1; i++){
     var newPanelTwo = $(`
        
                                <td class="hidden-xs">
                                    <a href="">
                                        <img src="img/fishw.jpg" />
                                    </a>
                                </td>
                                <td>
                                    <h6><a href="#">${data[i].equipment_name}</a></h6>
                                    <p class="mt-0">
                                        <small>SKU : #235145</small>
                                        <small>Color : Purple Grid Topsheet</small>
                                        <small>Size : 163-188</small>
                                    </p>
                                </td>
                                <td class="hidden-xs">${data[i].price}</td>
                                <td>
                                    <form>
                                        <input type="number" value="1" max="50" min="1" style="width: 100%; max-width: 70px;" class="input-md">
                                    </form>
                                </td>
                                <td>
                                    <form>
                                        <input type="number" value="1" max="50" min="1" style="width: 100%; max-width: 70px;" class="input-md">
                                    </form>
                                </td>

                                <td>$60.00</td>
                                <td><a><i class="fa fa-times-circle"></i></a></td>
                           
         
         `);

     $('#well-section-table').append(newPanelTwo);

 }
});
// $("#rent-me").on("click", function(event){
//     event.preventDefault();

//     console.log("you clicked the button");
// });
$.get("/api/all", function(data){
	console.log(data + "the data should be here");
	for(var i=0; i<1; i++){
     var newPanelOne = $(`
     	 <div class="row ">
                    <!-- Shop Item -->
                    <div class="col-md-6 mb-sm-60">

                        <div class="shop-detail-item">
                            <!--Item Images-->
                            <div class="sp-wrap">
                                    <img src="img/fishw.jpg" alt="">
                            </div>

                        </div>
                    </div>
                    <!-- End Shop Item -->

                    <!-- Shop info -->
                    <div class="col-md-6">
                        <div class="shop-detail-info">
                            <h4>${data[i].equipment_name}</h4>
                            <div class="shop-item-price mtb-15 ptb-15"><span>${data[i].price}</span></div>
                            <hr />
                            <p class="ptb-15">Details pulled from the DB </p>
                            <ul class="project-detail-block ptb-15">
                                <li>
                                    <p>
                                        <strong class="dark-color">Brand :</strong><span>Fisher</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong class="dark-color">SKU :</strong><span>#235145</span>
                                    </p>
                                </li>
                            </ul>
                        <div class="row">
                            <div class = "col-md-6">
                             <div class="cart-box">
                                    <label class="inline" for="qty"># of Items to Rent:</label>
                                    <input type="number" name="qty" value="1" max="50" min="1" class="input-lg" required="required" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cart-box">
                                    <label class="inline" for="qty"># Days to Rent :</label>
                                    <input type="number" name="daysToRent" value="1" max="10" min="1" class="input-lg" required="required" />
                                </div>
                            </div>
                        </div>
                    </div>
            <!--Date P End  -->
                            <br />
                            <a class="btn btn-lg btn-black form-full" href="shop-checkout.html"><i class="fa fa-shopping-cart left" style="color: white"></i>Rent Me</a><
                            <ul class="list-none-ib ptb-15 text-cap">
                                <li class="mr-30"><a class=""><i class="fa fa-heart left"></i>Add to wishlist</a></li>
                                <li><a><i class="fa fa-share-alt left"></i>Share</a></li>
                            </ul>
                    <!-- End Shop info -->
                      </div>
                    </div>
     		
     	`);

		$('#well-section-shop').append(newPanelOne);

	}
});





});

// <tr>
//                                 <td class="hidden-xs">
//                                     <a href="">
//                                         <img src="img/fishw.jpg" />
//                                     </a>
//                                 </td>
//                                 <td>
//                                     <h6><a href="#">Fischer My MTN 77</a></h6>
//                                     <p class="mt-0">
//                                         <small>SKU : #235145</small>
//                                         <small>Color : Purple Grid Topsheet</small>
//                                         <small>Size : 163-188</small>
//                                     </p>
//                                 </td>
//                                 <td class="hidden-xs">$60/Day</td>
//                                 <td>
//                                     <form>
//                                         <input type="number" value="1" max="50" min="1" style="width: 100%; max-width: 70px;" class="input-md">
//                                     </form>
//                                 </td>
//                                 <td>
//                                     <form>
//                                         <input type="number" value="1" max="50" min="1" style="width: 100%; max-width: 70px;" class="input-md">
//                                     </form>
//                                 </td>

//                                 <td>$60.00</td>
//                                 <td><a><i class="fa fa-times-circle"></i></a></td>
//                             </tr>