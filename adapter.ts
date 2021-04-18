interface IPhone {
  useLightning();
}

interface Android {
  useMicroUSB();
}

class iPhone7 implements IPhone {
  useLightning() {
    console.log("Using lightning port..'");
  }
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log("Using Micro USB..'");
  }
}

class LightningToMicroUSB implements Android {
  iPhoneDevice: IPhone;
  constructor(iPhone: IPhone) {
    this.iPhoneDevice = iPhone;
  }
  useMicroUSB() {
    console.log("Want to use micro USB, converting...");
    this.iPhoneDevice.useLightning();
  }
}



let iPhone = new iPhone7();
let chargeAdaptor = new LightningToMicroUSB(iPhone);
chargeAdaptor.useMicroUSB();
