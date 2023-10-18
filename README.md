## Eyevinn FAST Channel Engine SDK


### Installation
```
npm install @eyevinn/fast-engine-sdk
```

### Usage
```
import {
  AuthMethodsConfiguration,
  ChannelPostRequest,
  ChannelPostRequestTypeEnum,
  DefaultApi,
  TokenPostRequest,
  createConfiguration,
} from "fast-engine-sdk";
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
```
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
