const fs = require('fs');
const encrypt = require('./encrypt');
const decrypt = require('./decrypt')
require("dotenv").config();

const publicKey = fs.readFileSync("." + "/public_key.pem", "utf-8");
const encryptedMessage = encrypt.encrypt_publicKey(publicKey, process.env.MSG);
console.log(encryptedMessage.toString('hex'));

const privateKey = fs.readFileSync("." + "/private_key.pem", "utf-8");
const bufferMessage = decrypt.decrypt_privateKey(privateKey, encryptedMessage);
console.log("Decrypted Message:\n", bufferMessage.toString('utf-8'));

