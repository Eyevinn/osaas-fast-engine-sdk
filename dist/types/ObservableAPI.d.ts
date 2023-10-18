import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ChannelGet200ResponseInner } from '../models/ChannelGet200ResponseInner';
import { ChannelPost201Response } from '../models/ChannelPost201Response';
import { ChannelPostRequest } from '../models/ChannelPostRequest';
import { TokenPostRequest } from '../models/TokenPostRequest';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class ObservableDefaultApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    channelGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ChannelGet200ResponseInner>>>;
    channelGet(_options?: Configuration): Observable<Array<ChannelGet200ResponseInner>>;
    channelIdDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<string>>;
    channelIdDelete(id: string, _options?: Configuration): Observable<string>;
    channelIdGetWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ChannelGet200ResponseInner>>;
    channelIdGet(id: string, _options?: Configuration): Observable<ChannelGet200ResponseInner>;
    channelPostWithHttpInfo(body?: ChannelPostRequest, _options?: Configuration): Observable<HttpInfo<ChannelPost201Response>>;
    channelPost(body?: ChannelPostRequest, _options?: Configuration): Observable<ChannelPost201Response>;
    rootGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>>;
    rootGet(_options?: Configuration): Observable<string>;
    tokenPostWithHttpInfo(body?: TokenPostRequest, _options?: Configuration): Observable<HttpInfo<string>>;
    tokenPost(body?: TokenPostRequest, _options?: Configuration): Observable<string>;
}
