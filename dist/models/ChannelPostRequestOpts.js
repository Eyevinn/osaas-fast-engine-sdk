"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPostRequestOpts = void 0;
var ChannelPostRequestOpts = (function () {
    function ChannelPostRequestOpts() {
    }
    ChannelPostRequestOpts.getAttributeTypeMap = function () {
        return ChannelPostRequestOpts.attributeTypeMap;
    };
    ChannelPostRequestOpts.discriminator = undefined;
    ChannelPostRequestOpts.attributeTypeMap = [
        {
            "name": "useDemuxedAudio",
            "baseName": "useDemuxedAudio",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "useVttSubtitles",
            "baseName": "useVttSubtitles",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "defaultSlateUri",
            "baseName": "defaultSlateUri",
            "type": "string",
            "format": ""
        },
        {
            "name": "langList",
            "baseName": "langList",
            "type": "string",
            "format": ""
        },
        {
            "name": "langListSubs",
            "baseName": "langListSubs",
            "type": "string",
            "format": ""
        },
        {
            "name": "preset",
            "baseName": "preset",
            "type": "string",
            "format": ""
        },
        {
            "name": "preroll",
            "baseName": "preroll",
            "type": "ChannelPostRequestOptsPreroll",
            "format": ""
        }
    ];
    return ChannelPostRequestOpts;
}());
exports.ChannelPostRequestOpts = ChannelPostRequestOpts;
//# sourceMappingURL=ChannelPostRequestOpts.js.map