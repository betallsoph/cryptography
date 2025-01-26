const crypto = require('crypto');
const fs = require('fs');
const decrypt = require('./decrypt');

const received_data_fake = require("./signMessage-fake").package_to_send;
const received_data = require("./signMessage").package_to_send;
const hash = crypto.createHash(received_data_fake.algorithm);

hash.update(JSON.stringify(received_data_fake.originalData));
const hash_of_original_hex = hash.digest("hex");
console.log(hash_of_original_hex);

const publicKey = fs.readFileSync("."+"/public_key.pem","utf-8");
const decrypted_message = decrypt.decrypt_publicKey(publicKey, received_data.signAndEncryptData);
const decrypted_message_hex = decrypted_message.toString('utf-8');
console.log(decrypted_message_hex);

if (hash_of_original_hex === decrypted_message_hex) {
    console.log("Success! The data has not been edited and the sender is valid.");
}else{
    console.log("Error! The data has been edited or the sender is not valid.");
}