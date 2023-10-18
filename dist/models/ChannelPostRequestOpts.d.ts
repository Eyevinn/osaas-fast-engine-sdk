import { ChannelPostRequestOptsPreroll } from '../models/ChannelPostRequestOptsPreroll';
export declare class ChannelPostRequestOpts {
    'useDemuxedAudio'?: boolean;
    'useVttSubtitles'?: boolean;
    'defaultSlateUri'?: string;
    'langList'?: string;
    'langListSubs'?: string;
    'preset'?: string;
    'preroll'?: ChannelPostRequestOptsPreroll;
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
