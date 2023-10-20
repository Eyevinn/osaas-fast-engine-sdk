import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ChannelGet200ResponseInner } from '../models/ChannelGet200ResponseInner';
import { ChannelPost201Response } from '../models/ChannelPost201Response';
import { ChannelPostRequest } from '../models/ChannelPostRequest';
import { ChannelPostRequestOpts } from '../models/ChannelPostRequestOpts';
import { ChannelPostRequestOptsPreroll } from '../models/ChannelPostRequestOptsPreroll';
import { TokenPostRequest } from '../models/TokenPostRequest';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/FastEngineOSaaSv1";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all running FAST channels
     */
    public channelGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ChannelGet200ResponseInner>>> {
        const result = this.api.channelGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List all running FAST channels
     */
    public channelGet(_options?: Configuration): Promise<Array<ChannelGet200ResponseInner>> {
        const result = this.api.channelGet(_options);
        return result.toPromise();
    }

    /**
     * Stop and remove a FAST channel
     * @param id Channel Id
     */
    public channelIdDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.channelIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Stop and remove a FAST channel
     * @param id Channel Id
     */
    public channelIdDelete(id: string, _options?: Configuration): Promise<string> {
        const result = this.api.channelIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Obtain status and playback URL for a FAST channel
     * @param id Channel Id
     */
    public channelIdGetWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ChannelGet200ResponseInner>> {
        const result = this.api.channelIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Obtain status and playback URL for a FAST channel
     * @param id Channel Id
     */
    public channelIdGet(id: string, _options?: Configuration): Promise<ChannelGet200ResponseInner> {
        const result = this.api.channelIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Launch a new FAST channel
     * @param body 
     */
    public channelPostWithHttpInfo(body?: ChannelPostRequest, _options?: Configuration): Promise<HttpInfo<ChannelPost201Response>> {
        const result = this.api.channelPostWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Launch a new FAST channel
     * @param body 
     */
    public channelPost(body?: ChannelPostRequest, _options?: Configuration): Promise<ChannelPost201Response> {
        const result = this.api.channelPost(body, _options);
        return result.toPromise();
    }

    /**
     * Say hello
     */
    public rootGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.rootGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Say hello
     */
    public rootGet(_options?: Configuration): Promise<string> {
        const result = this.api.rootGet(_options);
        return result.toPromise();
    }

    /**
     * Generate a trial token
     * @param body 
     */
    public tokenPostWithHttpInfo(body?: TokenPostRequest, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.tokenPostWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Generate a trial token
     * @param body 
     */
    public tokenPost(body?: TokenPostRequest, _options?: Configuration): Promise<string> {
        const result = this.api.tokenPost(body, _options);
        return result.toPromise();
    }


}



