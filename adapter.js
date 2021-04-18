var iPhone7 = /** @class */ (function () {
    function iPhone7() {
    }
    iPhone7.prototype.useLightning = function () {
        console.log("Using lightning port..'");
    };
    return iPhone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log("Using Micro USB..'");
    };
    return GooglePixel;
}());
var LightningToMicroUSB = /** @class */ (function () {
    function LightningToMicroUSB(iPhone) {
        this.iPhoneDevice = iPhone;
    }
    LightningToMicroUSB.prototype.useMicroUSB = function () {
        console.log("Want to use micro USB, converting...");
        this.iPhoneDevice.useLightning();
    };
    return LightningToMicroUSB;
}());
var iPhone = new iPhone7();
var chargeAdaptor = new LightningToMicroUSB(iPhone);
chargeAdaptor.useMicroUSB();
