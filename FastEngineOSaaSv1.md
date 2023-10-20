# .FastEngineOSaaSv1

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelGet**](DefaultApi.md#channelGet) | **GET** /channel | 
[**channelIdDelete**](DefaultApi.md#channelIdDelete) | **DELETE** /channel/{id} | 
[**channelIdGet**](DefaultApi.md#channelIdGet) | **GET** /channel/{id} | 
[**channelPost**](DefaultApi.md#channelPost) | **POST** /channel | 
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | 
[**tokenPost**](DefaultApi.md#tokenPost) | **POST** /token | 


# **channelGet**
> Array<ChannelGet200ResponseInner> channelGet()

List all running FAST channels

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

apiInstance.channelGet().then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ChannelGet200ResponseInner>**

### Authorization

[jwtToken](README.md#jwtToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelIdDelete**
> string channelIdDelete()

Stop and remove a FAST channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let id = "id_example"

apiInstance.channelIdDelete(id).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Channel Id | defaults to undefined


### Return type

**string**

### Authorization

[jwtToken](README.md#jwtToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelIdGet**
> ChannelGet200ResponseInner channelIdGet()

Obtain status and playback URL for a FAST channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let id = "id_example"

apiInstance.channelIdGet(id).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Channel Id | defaults to undefined


### Return type

**ChannelGet200ResponseInner**

### Authorization

[jwtToken](README.md#jwtToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelPost**
> ChannelPost201Response channelPost()

Launch a new FAST channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiChannelPostRequest = {
  // ChannelPostRequest (optional)
  body: {
    name: "name_example",
    type: "Loop",
    url: "url_example",
    opts: {
      useDemuxedAudio: true,
      useVttSubtitles: true,
      defaultSlateUri: "defaultSlateUri_example",
      langList: "langList_example",
      langListSubs: "langListSubs_example",
      preset: "preset_example",
      preroll: {
        url: "url_example",
        duration: 3.14,
      },
    },
  },
};

apiInstance.channelPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelPostRequest**|  |


### Return type

**ChannelPost201Response**

### Authorization

[jwtToken](README.md#jwtToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rootGet**
> string rootGet()

Say hello

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.rootGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The magical words! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tokenPost**
> string tokenPost()

Generate a trial token

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTokenPostRequest = {
  // TokenPostRequest (optional)
  body: {
    company: "company_example",
    email: "email_example",
  },
};

apiInstance.tokenPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **TokenPostRequest**|  |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


