const crypto = require('crypto');

//giai ma bang provate key de giai ma du lieu
function decrypt_privateKey(privateKey, encryptedMessage) {
return crypto.privateDecrypt(privateKey, encryptedMessage);
}

//giai ma bang publickey de verify id
function decrypt_publicKey(publicKey, encryptedMessage) {
    return crypto.publicDecrypt(publicKey, encryptedMessage);
}

module.exports.decrypt_privateKey = decrypt_privateKey;
module.exports.decrypt_publicKey = decrypt_publicKey;