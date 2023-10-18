import { ChannelPostRequestOpts } from '../models/ChannelPostRequestOpts';
export declare class ChannelPostRequest {
    'name': string;
    'type': ChannelPostRequestTypeEnum;
    'url': string;
    'opts'?: ChannelPostRequestOpts;
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
export declare enum ChannelPostRequestTypeEnum {
    Loop = "Loop",
    Playlist = "Playlist",
    WebHook = "WebHook"
}
