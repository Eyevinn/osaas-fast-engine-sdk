export declare class ChannelGet200ResponseInner {
    'id': string;
    'name': string;
    'type': ChannelGet200ResponseInnerTypeEnum;
    'url': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum ChannelGet200ResponseInnerTypeEnum {
    Loop = "Loop",
    Playlist = "Playlist",
    WebHook = "WebHook"
}
