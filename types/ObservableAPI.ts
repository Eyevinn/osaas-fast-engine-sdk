import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ChannelGet200ResponseInner } from '../models/ChannelGet200ResponseInner';
import { ChannelPost201Response } from '../models/ChannelPost201Response';
import { ChannelPostRequest } from '../models/ChannelPostRequest';
import { ChannelPostRequestOpts } from '../models/ChannelPostRequestOpts';
import { ChannelPostRequestOptsPreroll } from '../models/ChannelPostRequestOptsPreroll';
import { TokenPostRequest } from '../models/TokenPostRequest';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * List all running FAST channels
     */
    public channelGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ChannelGet200ResponseInner>>> {
        const requestContextPromise = this.requestFactory.channelGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all running FAST channels
     */
    public channelGet(_options?: Configuration): Observable<Array<ChannelGet200ResponseInner>> {
        return this.channelGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ChannelGet200ResponseInner>>) => apiResponse.data));
    }

    /**
     * Stop and remove a FAST channel
     * @param id Channel Id
     */
    public channelIdDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.channelIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stop and remove a FAST channel
     * @param id Channel Id
     */
    public channelIdDelete(id: string, _options?: Configuration): Observable<string> {
        return this.channelIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Obtain status and playback URL for a FAST channel
     * @param id Channel Id
     */
    public channelIdGetWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ChannelGet200ResponseInner>> {
        const requestContextPromise = this.requestFactory.channelIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Obtain status and playback URL for a FAST channel
     * @param id Channel Id
     */
    public channelIdGet(id: string, _options?: Configuration): Observable<ChannelGet200ResponseInner> {
        return this.channelIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ChannelGet200ResponseInner>) => apiResponse.data));
    }

    /**
     * Launch a new FAST channel
     * @param body 
     */
    public channelPostWithHttpInfo(body?: ChannelPostRequest, _options?: Configuration): Observable<HttpInfo<ChannelPost201Response>> {
        const requestContextPromise = this.requestFactory.channelPost(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.channelPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Launch a new FAST channel
     * @param body 
     */
    public channelPost(body?: ChannelPostRequest, _options?: Configuration): Observable<ChannelPost201Response> {
        return this.channelPostWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ChannelPost201Response>) => apiResponse.data));
    }

    /**
     * Say hello
     */
    public rootGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.rootGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rootGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Say hello
     */
    public rootGet(_options?: Configuration): Observable<string> {
        return this.rootGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Generate a trial token
     * @param body 
     */
    public tokenPostWithHttpInfo(body?: TokenPostRequest, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.tokenPost(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tokenPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate a trial token
     * @param body 
     */
    public tokenPost(body?: TokenPostRequest, _options?: Configuration): Observable<string> {
        return this.tokenPostWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}
