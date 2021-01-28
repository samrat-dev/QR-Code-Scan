var QrCode = require("qrcode-reader");
var Jimp = require("jimp");
var fs = require("fs");

const getTextOld = function (url, cb) {
  //   var buffer = fs.readFileSync(__dirname + "/qr.jpg");
  var buffer = fs.readFileSync(url);
  Jimp.read(buffer, function (err, image) {
    if (err) {
      console.error(err);
      // TODO handle error
    }
    var qr = new QrCode();
    qr.callback = function (err, value) {
      if (err) {
        console.error(err);
        // TODO handle error
      }
      if (cb) {
        cb(value.result);
      }
      // console.log(value.result);
      // console.log(value);
    };
    //   console.log(image);
    qr.decode(image.bitmap);
  });
};

async function getText(url) {
  var buffer = fs.readFileSync(url);
  const img = await Jimp.read(buffer);
  const qr = new QrCode();
  const value = await new Promise((resolve, reject) => {
    qr.callback = (err, v) => (err != null ? reject(err) : resolve(v));
    qr.decode(img.bitmap);
    console.log(value);
  });
  return value.result || null;
}

module.exports = { getText };
