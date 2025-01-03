var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Browser = /** @class */ (function () {
    function Browser(browserType) {
        this.browserType = browserType;
    }
    Browser.prototype.logSession = function () {
        console.log("Browser session for ".concat(this.browserType));
    };
    Browser.prototype.launchBrowser = function () {
        this.logSession(); //Private method can be called within the class
        return "launching ".concat(this.browserType, " browser");
    };
    return Browser;
}());
var browserSession = new Browser('edge');
console.log(browserSession.launchBrowser());
var BaseClass = /** @class */ (function () {
    function BaseClass(browserType) {
        this.browserType = browserType;
    }
    BaseClass.prototype.logSession = function () {
        console.log("This is from the Baseclass");
        console.log("Browser session for ".concat(this.browserType));
    };
    BaseClass.prototype.launchBrowser = function () {
        this.logSession(); //Private method can be called within the class
        return "launching ".concat(this.browserType, " browser");
    };
    return BaseClass;
}());
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.logSession = function () {
        console.log("This is from the Dashboard class");
    };
    Dashboard.prototype.captureScreenshot = function () {
        this.logSession();
        console.log("Capturing screenshot ".concat(this.browserType));
    };
    return Dashboard;
}(BaseClass));
var session = new Dashboard('Firefox');
session.captureScreenshot();
