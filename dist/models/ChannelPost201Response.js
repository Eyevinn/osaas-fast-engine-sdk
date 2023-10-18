"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPost201ResponseTypeEnum = exports.ChannelPost201Response = void 0;
var ChannelPost201Response = (function () {
    function ChannelPost201Response() {
    }
    ChannelPost201Response.getAttributeTypeMap = function () {
        return ChannelPost201Response.attributeTypeMap;
    };
    ChannelPost201Response.discriminator = undefined;
    ChannelPost201Response.attributeTypeMap = [
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
            "type": "ChannelPost201ResponseTypeEnum",
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
        },
        {
            "name": "playback",
            "baseName": "playback",
            "type": "string",
            "format": ""
        }
    ];
    return ChannelPost201Response;
}());
exports.ChannelPost201Response = ChannelPost201Response;
var ChannelPost201ResponseTypeEnum;
(function (ChannelPost201ResponseTypeEnum) {
    ChannelPost201ResponseTypeEnum["Loop"] = "Loop";
    ChannelPost201ResponseTypeEnum["Playlist"] = "Playlist";
    ChannelPost201ResponseTypeEnum["WebHook"] = "WebHook";
})(ChannelPost201ResponseTypeEnum = exports.ChannelPost201ResponseTypeEnum || (exports.ChannelPost201ResponseTypeEnum = {}));
//# sourceMappingURL=ChannelPost201Response.js.map