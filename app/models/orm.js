// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('sherpaDB', 'username', 'password');
// var test = new Sequelize('testDB', 'username', 'password');
// below code is a table within the db and its components and I do this for each column within each table within the db
// building out the models here.
// var User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });

// var User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });
// // if this is for the testDB, then this is how it would be referenced
// var User = test.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });
//  //seeding a new user into the database, look at this again after I discuss with the team, how are we going to populate (with dummy data???)
//  // .sync is a sequalize method that prepares the database for changes
// sequelize.sync().then(function() {
//   return User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//  // once sync (a built in method, there are lots of built in methods that do different things with your database) has been succesfully executed, then populate the database with the object of jane (new user)
//  //create a loop 
// }).then(function(jane) {
//   console.log(jane.get({
//     plain: true
//   }));
// });