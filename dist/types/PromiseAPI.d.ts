import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ChannelGet200ResponseInner } from '../models/ChannelGet200ResponseInner';
import { ChannelPost201Response } from '../models/ChannelPost201Response';
import { ChannelPostRequest } from '../models/ChannelPostRequest';
import { TokenPostRequest } from '../models/TokenPostRequest';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/FastEngineOSaaSv1";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    channelGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ChannelGet200ResponseInner>>>;
    channelGet(_options?: Configuration): Promise<Array<ChannelGet200ResponseInner>>;
    channelIdDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<string>>;
    channelIdDelete(id: string, _options?: Configuration): Promise<string>;
    channelIdGetWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ChannelGet200ResponseInner>>;
    channelIdGet(id: string, _options?: Configuration): Promise<ChannelGet200ResponseInner>;
    channelPostWithHttpInfo(body?: ChannelPostRequest, _options?: Configuration): Promise<HttpInfo<ChannelPost201Response>>;
    channelPost(body?: ChannelPostRequest, _options?: Configuration): Promise<ChannelPost201Response>;
    rootGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>>;
    rootGet(_options?: Configuration): Promise<string>;
    tokenPostWithHttpInfo(body?: TokenPostRequest, _options?: Configuration): Promise<HttpInfo<string>>;
    tokenPost(body?: TokenPostRequest, _options?: Configuration): Promise<string>;
}
