export * from '../models/ChannelGet200ResponseInner';
export * from '../models/ChannelPost201Response';
export * from '../models/ChannelPostRequest';
export * from '../models/ChannelPostRequestOpts';
export * from '../models/ChannelPostRequestOptsPreroll';
export * from '../models/TokenPostRequest';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
