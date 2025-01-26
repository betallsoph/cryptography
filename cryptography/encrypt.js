const crypto = require("crypto");

//ma hoa bang public key de encrypt data
function encrypt_publicKey(publicKey, message){
    const bufferMessage = Buffer.from(message, 'utf-8');
    return crypto.publicEncrypt(publicKey, bufferMessage);
}

//ma hoa bang priavte key de cerify id
function encrypt_privateKey(privateKey, message){
    const bufferMessage = Buffer.from(message,"utf-8");
    return crypto.privateEncrypt(privateKey, bufferMessage);
}

module.exports.encrypt_publicKey = encrypt_publicKey;
module.exports.encrypt_privateKey = encrypt_privateKey;