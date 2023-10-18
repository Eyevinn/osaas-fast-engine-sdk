"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.JwtTokenAuthentication = void 0;
var JwtTokenAuthentication = (function () {
    function JwtTokenAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    JwtTokenAuthentication.prototype.getName = function () {
        return "jwtToken";
    };
    JwtTokenAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("x-jwt", this.apiKey);
    };
    return JwtTokenAuthentication;
}());
exports.JwtTokenAuthentication = JwtTokenAuthentication;
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["jwtToken"]) {
        authMethods["jwtToken"] = new JwtTokenAuthentication(config["jwtToken"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map