var db = require("../models/orm.js");

module.exports = function(app){ 

	//get all the equipment information ever
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

	 // app.get("/api/equipment/:id", function(req, res) {
  //    // Find one Author with the id in req.params.id and return them to the user with res.json
  //  db.equipment.findOne({
  //  	where: {
  //  		id: req.params.id
  //  	},
  //  	include: [db.season_name]
  //  }).then(function(dbPost){
  //  		res.json(dbPost);
  //  })
  //  });
	// app.get("/api/:season_name", function(req, res){
	// 	Equipment.findAll({

	// 		where: {
	// 			season_name: req.params.season_name
	// 		}
	// 	}).then(function(results){
	// 		res.json(results);
	// 	});
	// });
	// app.get("/api/:equipment_name", function(req, res){
	// 	Equipment.findAll({

	// 		where: {
	// 			equipment_name: req.params.equipment_name
	// 		}
	// 	}).then(function(results){
	// 		res.json(results);
	// 	});
	// });
	// app.post("/api/:epuipment_name", function(req, res){
	// 	db
	// })



}