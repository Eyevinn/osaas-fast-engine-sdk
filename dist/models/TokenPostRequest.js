"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPostRequest = void 0;
var TokenPostRequest = (function () {
    function TokenPostRequest() {
    }
    TokenPostRequest.getAttributeTypeMap = function () {
        return TokenPostRequest.attributeTypeMap;
    };
    TokenPostRequest.discriminator = undefined;
    TokenPostRequest.attributeTypeMap = [
        {
            "name": "company",
            "baseName": "company",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }
    ];
    return TokenPostRequest;
}());
exports.TokenPostRequest = TokenPostRequest;
//# sourceMappingURL=TokenPostRequest.js.map