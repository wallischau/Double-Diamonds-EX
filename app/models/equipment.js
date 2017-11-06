var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Equipment = sequelize.define('equipment', {
	id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	}, 
	package_level: {
		type: Sequelize.STRING
	},
	equipment_name: 
	{
		type: Sequelize.STRING
	},
	size: {
		type: Sequelize.INTEGER
	},
	season_name: {
		type: Sequelize.STRING
	},
	stock_quantity: {
		type: Sequelize.INTEGER
	}
}, {

		timestamps: false
	});


Equipment.sync();

module.exports = Equipment;

//image url and string 