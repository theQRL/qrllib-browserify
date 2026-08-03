const { Transform } = require("stream");

module.exports = (fileName) => {
  const chunks = [];

  return new Transform({
    transform(chunk, encoding, callback) {
      chunks.push(chunk);
      callback();
    },
    flush(callback) {
      let source = Buffer.concat(chunks);

      if (fileName.endsWith("/qrllib/build/offline-libjsqrl.js")) {
        source = Buffer.concat([
          Buffer.from("var QRLLIB;\n"),
          source,
          Buffer.from("\nmodule.exports = QRLLIB;\n"),
        ]);
      }

      callback(null, source);
    },
  });
};
