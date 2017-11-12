/*****************************************************************/
/* all.js                                                        */
/* Description: js file for ski.html and similar pages           */
/* Date: 10/28/2017                                              */
/* Author: Wallis Chau, Megan Landahl, Ed Quintana, Kelly Wenzel */
/*****************************************************************/

$(document).ready(function(){
var equipmentArray;



$.get("/api/all", function(data){
    console.log(data, " the data should be here");
    //store data into array
    equipmentArray = data.slice();
    for(var i=0; i< 8; i++){
     var newPanel = $(`
         <div class="nf-item col-md-3 col-sm-6 mb-30">
            <div class="item-box">
                <!-- Shop item images -->
                <div class="shop-item">
                    <div class="item-img">
                        <img src=${data[i].pic} alt="" />
                    </div>
                    <div class="item-mask">
                        <div class="item-mask-detail">
                            <div class="item-mask-detail-ele">
                                <a id="rent-me" class="btn btn-line-xs btn-white-line"><i class="fa fa-shopping-cart"></i>Rent Me</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Shop item images -->
                <!-- Shop item info -->
                <div class="shop-item-info">
                  <form action="shop-detail.html", method="GET"> 
                    <input type="hidden" name="item_id" value=${data[i].id}>
                    <input class="item-detail" type="submit" name="item_box" value='${data[i].equipment_name}'>
                  </form>
                    <div class="shop-item-price"><span>$${data[i].price}/day</span></div>
                    <p>${data[i].description}</p>
                </div>
                <!-- Shop item info -->
            </div>
        </div>
            
        `);

    $('#well-section').append(newPanel);

    }//for
}); //.get(api/all)

}); //ready

