import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ChannelGet200ResponseInner } from '../models/ChannelGet200ResponseInner';
import { ChannelPost201Response } from '../models/ChannelPost201Response';
import { ChannelPostRequest } from '../models/ChannelPostRequest';
import { TokenPostRequest } from '../models/TokenPostRequest';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiChannelGetRequest {
}
export interface DefaultApiChannelIdDeleteRequest {
    id: string;
}
export interface DefaultApiChannelIdGetRequest {
    id: string;
}
export interface DefaultApiChannelPostRequest {
    body?: ChannelPostRequest;
}
export interface DefaultApiRootGetRequest {
}
export interface DefaultApiTokenPostRequest {
    body?: TokenPostRequest;
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    channelGetWithHttpInfo(param?: DefaultApiChannelGetRequest, options?: Configuration): Promise<HttpInfo<Array<ChannelGet200ResponseInner>>>;
    channelGet(param?: DefaultApiChannelGetRequest, options?: Configuration): Promise<Array<ChannelGet200ResponseInner>>;
    channelIdDeleteWithHttpInfo(param: DefaultApiChannelIdDeleteRequest, options?: Configuration): Promise<HttpInfo<string>>;
    channelIdDelete(param: DefaultApiChannelIdDeleteRequest, options?: Configuration): Promise<string>;
    channelIdGetWithHttpInfo(param: DefaultApiChannelIdGetRequest, options?: Configuration): Promise<HttpInfo<ChannelGet200ResponseInner>>;
    channelIdGet(param: DefaultApiChannelIdGetRequest, options?: Configuration): Promise<ChannelGet200ResponseInner>;
    channelPostWithHttpInfo(param?: DefaultApiChannelPostRequest, options?: Configuration): Promise<HttpInfo<ChannelPost201Response>>;
    channelPost(param?: DefaultApiChannelPostRequest, options?: Configuration): Promise<ChannelPost201Response>;
    rootGetWithHttpInfo(param?: DefaultApiRootGetRequest, options?: Configuration): Promise<HttpInfo<string>>;
    rootGet(param?: DefaultApiRootGetRequest, options?: Configuration): Promise<string>;
    tokenPostWithHttpInfo(param?: DefaultApiTokenPostRequest, options?: Configuration): Promise<HttpInfo<string>>;
    tokenPost(param?: DefaultApiTokenPostRequest, options?: Configuration): Promise<string>;
}
