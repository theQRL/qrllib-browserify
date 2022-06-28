import { QRLLIBmodule } from "qrllib/build/offline-libjsqrl.js";

const waitForQRLLIB = (callBack) => {
  setTimeout(() => {
    // Test the QRLLIB object has the str2bin function.
    // This is sufficient to tell us QRLLIB has loaded.
    if (typeof QRLLIB.str2bin === "function") {
      callBack();
    } else {
      return waitForQRLLIB(callBack);
    }
    return false;
  }, 50);
};

async function makeWindow() {
  await QRLLIBmodule;
  waitForQRLLIB(() => {
    console.log('QRLLIB v1.2.4 loaded');
    window.QRLLIB = QRLLIB;
  });
}

makeWindow();
