import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ChannelGet200ResponseInner } from '../models/ChannelGet200ResponseInner';
import { ChannelPost201Response } from '../models/ChannelPost201Response';
import { ChannelPostRequest } from '../models/ChannelPostRequest';
import { TokenPostRequest } from '../models/TokenPostRequest';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    channelGet(_options?: Configuration): Promise<RequestContext>;
    channelIdDelete(id: string, _options?: Configuration): Promise<RequestContext>;
    channelIdGet(id: string, _options?: Configuration): Promise<RequestContext>;
    channelPost(body?: ChannelPostRequest, _options?: Configuration): Promise<RequestContext>;
    rootGet(_options?: Configuration): Promise<RequestContext>;
    tokenPost(body?: TokenPostRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    channelGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ChannelGet200ResponseInner>>>;
    channelIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    channelIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ChannelGet200ResponseInner>>;
    channelPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ChannelPost201Response>>;
    rootGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    tokenPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
}
