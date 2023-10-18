import { ChannelPostRequestOpts } from '../models/ChannelPostRequestOpts';
export declare class ChannelPost201Response {
    'id': string;
    'name': string;
    'type': ChannelPost201ResponseTypeEnum;
    'url': string;
    'opts'?: ChannelPostRequestOpts;
    'playback': string;
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
export declare enum ChannelPost201ResponseTypeEnum {
    Loop = "Loop",
    Playlist = "Playlist",
    WebHook = "WebHook"
}
