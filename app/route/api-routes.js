/*****************************************************************/
/* api-route.js                                                  */
/* Description: api route definition                             */
/* Date: 10/28/2017                                              */
/* Author: Wallis Chau, Megan Landahl, Ed Quintana, Kelly Wenzel */
/*****************************************************************/

var db = require("../models/orm.js");

module.exports = function(app){ 

	//get all the equipment information 
	app.get("/api/all", function(req, res){
		db.equipment.findAll({}).then(function(results){
			res.json(results);
		});
	});

	 app.get("/api/:id", function(req, res) {
     // Find one equipment with the id in req.params.id and return them to the user with res.json
    if(req.params.id)
    db.equipment.findOne({
      where: {
       id: req.params.id
      }
    }).then(function(results) {
      return res.json(results);

    });
  });

	//post customer info into systemUsers table
	app.post("/api/newCustomer", function(req, res){
		console.log("customer Data");
		console.log(req.body);
		//system users
		console.log(db.systemUsers)
		db.systemUsers.create({
			email: req.body.email,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			phone: req.body.phone
		}).catch(function(err) {
			console.log("something");
		});
		
	});
}//export modules