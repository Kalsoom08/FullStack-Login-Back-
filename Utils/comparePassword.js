const bcrypt = require('bcrypt');

const comparePassword = async (enteredPassword, hashedPassword) => {
    return await bcrypt.compare(enteredPassword, hashedPassword);
}
module.exports = comparePassword;