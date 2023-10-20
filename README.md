## Open Source FAST Engine as a Service SDK

The `@eyevinn/fast-engine-sdk` is an SDK for the [hosted version of the open source FAST Engine](https://fast.docs.eyevinn.technology/osaas.html). For access you need a `TOKEN` and to request a token or get more information about the service contact sales@eyevinn.se however if you want to try it out we have a test environment available that you can use. 

The address to the API in the test environment is `https://api-ce.stage.osaas.io/` and here you can generate a trial-token to try this out. 

### Installation

```
npm install @eyevinn/fast-engine-sdk
```

### Usage

```javascript
import {
  AuthMethodsConfiguration,
  ChannelPostRequest,
  ChannelPostRequestTypeEnum,
  DefaultApi,
  TokenPostRequest,
  createConfiguration,
} from "@eyevinn/fast-engine-sdk";
const authConfig: AuthMethodsConfiguration = {
  jwtToken:
    "Bearer YOUR_TOKEN",
};
const configuration = createConfiguration({
  authMethods: authConfig,
});
const apiInstance = new DefaultApi(configuration);
```

#### Generating a trial token

Only available in the test environment.

```javascript
const body: TokenPostRequest = {
  company: "YOUR_COMPANY",
  email: "YOUR_EMAIL",
};

apiInstance
  .tokenPost(body)
  .then((data: any) => {
    console.log("Token generated: ", data);
  })
  .catch((error: any) => {
    console.error("Error generating token: ", error);
  });
```

#### Launching a new FAST channel
```
const body: ChannelPostRequest = {
  name: "CHANNEL_NAME",
  type: "CHANNEL_TYPE",
  url: "VIDEO_URL",
};

apiInstance
  .channelPost(body)
  .then((data: any) => {
    console.log("Launched a new FAST channel! ", data);
  })
  .catch((error: any) => {
    console.error("Error launching new FAST channel: ", error);
  });
```
#### Getting all running channels
```
apiInstance
  .channelGet()
  .then((data: any) => {
    console.log("All channels: ", data);
  })
  .catch((error: any) => {
    console.error("Error getting all channels: ", error);
  });
```

#### Stopping and removing a channel
```
apiInstance
  .channelIdDelete("CHANNEL_ID")
  .then((data: any) => {
    console.log("Channel deleted!");
  })
  .catch((error: any) => {
    console.error("Channel could not be deleted ", error);
  });
```
