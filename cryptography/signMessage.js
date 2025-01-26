const crypto = require('crypto');
const hash = crypto.createHash("sha256");
const fs = require('fs');
const encrypt = require("./encrypt");

const myData = {
    firstName: "Donald",
    lastName: "Trump",
    citizenId: "1234567890"
};

const myDataString = JSON.stringify(myData);
hash.update(myDataString);
const hashedData = hash.digest('hex');
const sender_privateKey = fs.readFileSync(__dirname + '/private_key.pem', 'utf-8');

const signedMessage = encrypt.encrypt_privateKey(sender_privateKey, hashedData);
const package_to_send = {
    algorithm: 'sha256',
    originalData: myData,
    signAndEncryptData: signedMessage,
};

module.exports.package_to_send = package_to_send;