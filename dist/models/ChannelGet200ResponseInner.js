"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelGet200ResponseInnerTypeEnum = exports.ChannelGet200ResponseInner = void 0;
var ChannelGet200ResponseInner = (function () {
    function ChannelGet200ResponseInner() {
    }
    ChannelGet200ResponseInner.getAttributeTypeMap = function () {
        return ChannelGet200ResponseInner.attributeTypeMap;
    };
    ChannelGet200ResponseInner.discriminator = undefined;
    ChannelGet200ResponseInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ChannelGet200ResponseInnerTypeEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    return ChannelGet200ResponseInner;
}());
exports.ChannelGet200ResponseInner = ChannelGet200ResponseInner;
var ChannelGet200ResponseInnerTypeEnum;
(function (ChannelGet200ResponseInnerTypeEnum) {
    ChannelGet200ResponseInnerTypeEnum["Loop"] = "Loop";
    ChannelGet200ResponseInnerTypeEnum["Playlist"] = "Playlist";
    ChannelGet200ResponseInnerTypeEnum["WebHook"] = "WebHook";
})(ChannelGet200ResponseInnerTypeEnum = exports.ChannelGet200ResponseInnerTypeEnum || (exports.ChannelGet200ResponseInnerTypeEnum = {}));
//# sourceMappingURL=ChannelGet200ResponseInner.js.map