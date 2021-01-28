const { getText, getTextOld } = require("./getText");
const path = require("path");

// console.log("QR code");

const img = path.resolve(__dirname + "/qr.jpg");
/* getTextOld(img, (data) => {
    console.log(data);
}); */

// --------------new fn------------
(async function () {
  var data = await getText(img);
  console.log(data);
})();
