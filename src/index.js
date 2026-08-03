import QRLLIB from "qrllib/build/offline-libjsqrl.js";

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

function makeWindow() {
  waitForQRLLIB(() => {
    console.log('QRLLIB v1.2.6 loaded');
    window.QRLLIB = QRLLIB;
  });
}

makeWindow();
