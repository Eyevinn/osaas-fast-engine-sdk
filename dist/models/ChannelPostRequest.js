"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPostRequestTypeEnum = exports.ChannelPostRequest = void 0;
var ChannelPostRequest = (function () {
    function ChannelPostRequest() {
    }
    ChannelPostRequest.getAttributeTypeMap = function () {
        return ChannelPostRequest.attributeTypeMap;
    };
    ChannelPostRequest.discriminator = undefined;
    ChannelPostRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ChannelPostRequestTypeEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "opts",
            "baseName": "opts",
            "type": "ChannelPostRequestOpts",
            "format": ""
        }
    ];
    return ChannelPostRequest;
}());
exports.ChannelPostRequest = ChannelPostRequest;
var ChannelPostRequestTypeEnum;
(function (ChannelPostRequestTypeEnum) {
    ChannelPostRequestTypeEnum["Loop"] = "Loop";
    ChannelPostRequestTypeEnum["Playlist"] = "Playlist";
    ChannelPostRequestTypeEnum["WebHook"] = "WebHook";
})(ChannelPostRequestTypeEnum = exports.ChannelPostRequestTypeEnum || (exports.ChannelPostRequestTypeEnum = {}));
//# sourceMappingURL=ChannelPostRequest.js.map