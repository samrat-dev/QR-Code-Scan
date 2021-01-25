const getText = require('./getText');
const path = require("path");

// console.log("QR code");

const img = path.resolve(__dirname + '/qr.jpg');
getText(img, (data) => {
    console.log(data);
});

