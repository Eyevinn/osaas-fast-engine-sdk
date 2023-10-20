import {
  ResponseContext,
  RequestContext,
  HttpFile,
  HttpInfo
} from '../http/http';
import { Configuration } from '../configuration';

import { ChannelGet200ResponseInner } from '../models/ChannelGet200ResponseInner';
import { ChannelPost201Response } from '../models/ChannelPost201Response';
import { ChannelPostRequest } from '../models/ChannelPostRequest';
import { ChannelPostRequestOpts } from '../models/ChannelPostRequestOpts';
import { ChannelPostRequestOptsPreroll } from '../models/ChannelPostRequestOptsPreroll';
import { TokenPostRequest } from '../models/TokenPostRequest';

import { ObservableDefaultApi } from './ObservableAPI';
import {
  DefaultApiRequestFactory,
  DefaultApiResponseProcessor
} from '../apis/FastEngineOSaaSv1';

export interface DefaultApiChannelGetRequest {}

export interface DefaultApiChannelIdDeleteRequest {
  /**
   * Channel Id
   * @type string
   * @memberof DefaultApichannelIdDelete
   */
  id: string;
}

export interface DefaultApiChannelIdGetRequest {
  /**
   * Channel Id
   * @type string
   * @memberof DefaultApichannelIdGet
   */
  id: string;
}

export interface DefaultApiChannelPostRequest {
  /**
   *
   * @type ChannelPostRequest
   * @memberof DefaultApichannelPost
   */
  body?: ChannelPostRequest;
}

export interface DefaultApiRootGetRequest {}

export interface DefaultApiTokenPostRequest {
  /**
   *
   * @type TokenPostRequest
   * @memberof DefaultApitokenPost
   */
  body?: TokenPostRequest;
}

export class ObjectDefaultApi {
  private api: ObservableDefaultApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DefaultApiRequestFactory,
    responseProcessor?: DefaultApiResponseProcessor
  ) {
    this.api = new ObservableDefaultApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * List all running FAST channels
   * @param param the request object
   */
  public channelGetWithHttpInfo(
    param: DefaultApiChannelGetRequest = {},
    options?: Configuration
  ): Promise<HttpInfo<Array<ChannelGet200ResponseInner>>> {
    return this.api.channelGetWithHttpInfo(options).toPromise();
  }

  /**
   * List all running FAST channels
   * @param param the request object
   */
  public channelGet(
    param: DefaultApiChannelGetRequest = {},
    options?: Configuration
  ): Promise<Array<ChannelGet200ResponseInner>> {
    return this.api.channelGet(options).toPromise();
  }

  /**
   * Stop and remove a FAST channel
   * @param param the request object
   */
  public channelIdDeleteWithHttpInfo(
    param: DefaultApiChannelIdDeleteRequest,
    options?: Configuration
  ): Promise<HttpInfo<string>> {
    return this.api.channelIdDeleteWithHttpInfo(param.id, options).toPromise();
  }

  /**
   * Stop and remove a FAST channel
   * @param param the request object
   */
  public channelIdDelete(
    param: DefaultApiChannelIdDeleteRequest,
    options?: Configuration
  ): Promise<string> {
    return this.api.channelIdDelete(param.id, options).toPromise();
  }

  /**
   * Obtain status and playback URL for a FAST channel
   * @param param the request object
   */
  public channelIdGetWithHttpInfo(
    param: DefaultApiChannelIdGetRequest,
    options?: Configuration
  ): Promise<HttpInfo<ChannelGet200ResponseInner>> {
    return this.api.channelIdGetWithHttpInfo(param.id, options).toPromise();
  }

  /**
   * Obtain status and playback URL for a FAST channel
   * @param param the request object
   */
  public channelIdGet(
    param: DefaultApiChannelIdGetRequest,
    options?: Configuration
  ): Promise<ChannelGet200ResponseInner> {
    return this.api.channelIdGet(param.id, options).toPromise();
  }

  /**
   * Launch a new FAST channel
   * @param param the request object
   */
  public channelPostWithHttpInfo(
    param: DefaultApiChannelPostRequest = {},
    options?: Configuration
  ): Promise<HttpInfo<ChannelPost201Response>> {
    return this.api.channelPostWithHttpInfo(param.body, options).toPromise();
  }

  /**
   * Launch a new FAST channel
   * @param param the request object
   */
  public channelPost(
    param: DefaultApiChannelPostRequest = {},
    options?: Configuration
  ): Promise<ChannelPost201Response> {
    return this.api.channelPost(param.body, options).toPromise();
  }

  /**
   * Say hello
   * @param param the request object
   */
  public rootGetWithHttpInfo(
    param: DefaultApiRootGetRequest = {},
    options?: Configuration
  ): Promise<HttpInfo<string>> {
    return this.api.rootGetWithHttpInfo(options).toPromise();
  }

  /**
   * Say hello
   * @param param the request object
   */
  public rootGet(
    param: DefaultApiRootGetRequest = {},
    options?: Configuration
  ): Promise<string> {
    return this.api.rootGet(options).toPromise();
  }

  /**
   * Generate a trial token
   * @param param the request object
   */
  public tokenPostWithHttpInfo(
    param: DefaultApiTokenPostRequest = {},
    options?: Configuration
  ): Promise<HttpInfo<string>> {
    return this.api.tokenPostWithHttpInfo(param.body, options).toPromise();
  }

  /**
   * Generate a trial token
   * @param param the request object
   */
  public tokenPost(
    param: DefaultApiTokenPostRequest = {},
    options?: Configuration
  ): Promise<string> {
    return this.api.tokenPost(param.body, options).toPromise();
  }
}
