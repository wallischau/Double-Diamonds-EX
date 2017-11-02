var bcrypt   = require('bcrypt-nodejs');


// methods ======================
// generating a hash
var generateHash = function(password) {
    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    console.log(hash);
    return hash;
};

// checking if password is valid
var validPassword = function(password, passwordOnFile) {
	console.log(passwordOnFile);
    var unhash = bcrypt.compareSync(password, passwordOnFile);
    console.log(unhash);
    return unhash;
};

// create the model for users and expose it to our app
module.exports = { generateHash: generateHash,
					validPassword: validPassword }
