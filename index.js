const daysleft = require('daysleft');

module.exports = input => {
	try {
		return daysleft(input);
	} catch (err) {
		return err.message;
	}
};
