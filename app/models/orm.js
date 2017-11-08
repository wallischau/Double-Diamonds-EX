var Sequelize = require('sequelize');

// TODO: Need to add support for multiple configs (dev/prod) and heroku
var configs = {
  "sherpa": {
    "username": "root",
    "password": null,
    "database": "sherpadb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  var sherpaDB = new Sequelize(configs['sherpa'].database,
  configs['sherpa'].username, configs['sherpa'].password, configs['sherpa']);
}

var equipment = sherpaDB.define('equipment', {
  equipment_brand: Sequelize.STRING(100),
  equipment_name: Sequelize.STRING(100),
  description: Sequelize.STRING(100),
  equipment_type: Sequelize.STRING(50),
  sku: Sequelize.STRING(6),
  pic: Sequelize.STRING(255),
  price: Sequelize.DECIMAL(10,2),
  stock_quantity: Sequelize.INTEGER(10)
});

var reservations = sherpaDB.define('reservations', {
  product_name: Sequelize.STRING(100),
  department_name: Sequelize.STRING(100),
  total_price: Sequelize.DECIMAL(10,2),
  user_id: Sequelize.INTEGER,
  equipment_id: Sequelize.INTEGER,
  payment_id: Sequelize.INTEGER
});

var payments = sherpaDB.define('payments', {
  type: Sequelize.STRING(50),
  number: Sequelize.STRING(100),
  expire: Sequelize.DATE,
  amount: Sequelize.DECIMAL(10,2)
});

var systemUsers = sherpaDB.define('systemUsers', {
  type: Sequelize.STRING(5),
  email: { 
    type: Sequelize.STRING(40), unique: true
  },
  password: Sequelize.STRING(100), 
  last_name: Sequelize.STRING(100),
  first_name: Sequelize.STRING(100),
  phone: Sequelize.STRING(20)
});

sherpaDB.sync().then(function() {
  // The line below for test purposes
  // sherpaTests();
});

function sherpaTests() {
  // Create a test user
  systemUsers.create({
    email: 'kelly@sherpa.com',
    password: 'monetize',
    type: 'user',
    last_name: 'rene',
    first_name: 'kelly',
    phone: '123-456-7890',
  })
  .then(function(results) {
    console.log("Results:", results.get({plain: true}));
    console.log("----------");
    // Update the email for the user
    var userId = results.id;
    systemUsers.update({
      email: 'kelly@imnotyoursherpa.com'
    }, {
      where: {
        id: userId
      }
    })
    .then(function(results) {
      console.log("Results:", results);
      console.log("----------");
      // Remove the user from the db
      systemUsers.destroy({
        where: {
          id: userId
        }
      })
      .then(function(results) {
        console.log("Results:", results);
        console.log("----------");
      });
    });
  });
}

var db = {
	equipment: equipment,
	reservations: reservations,
	payments: payments,
	systemUsers: systemUsers
};
module.exports = db;