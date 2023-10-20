## Open Source FAST Engine as a Service SDK

The `@eyevinn/fast-engine-sdk` is an SDK for the [hosted version of the open source FAST Engine](https://fast.docs.eyevinn.technology/osaas.html). For access you need a `TOKEN` and to request a token or get more information about the service contact sales@eyevinn.se however if you want to try it out we have a test environment available that you can use.

The address to the API in the test environment is `https://api-ce.stage.osaas.io/` and here you can generate a trial-token to try this out.

### Installation

```
npm install @osaas/fast-engine-client
```

### Usage

```javascript
import {
  FastEngineOSaaSv1,
  createConfiguration
} from '@osaas/fast-engine-client';

const config = createConfiguration({
  authMethods: {
    jwtToken: 'Bearer ' + process.env.TOKEN
  },
  apiEndpoint: 'https://api-ce.stage.osaas.io'
});
const client = new FastEngineOSaaSv1(config);
```

#### Generating a trial token

Only available in the test environment.

```javascript
import {
  FastEngineOSaaSv1,
  createConfiguration
} from '@osaas/fast-engine-client';

const body: TokenPostRequest = {
  company: 'YOUR_COMPANY',
  email: 'YOUR_EMAIL'
};

const config = createConfiguration({
  apiEndpoint: 'https://api-ce.stage.osaas.io'
});
const client = new FastEngineOSaaSv1(config);
const trialToken = await client.tokenPost({
  company: 'YOUR_COMPANY',
  email: 'YOUR_EMAIL'
});
```

#### Launching a new FAST channel

```javascript
import {
  FastEngineOSaaSv1,
  createConfiguration,
  ChannelPostRequestTypeEnum,
  ChannelPostRequest
} from '@osaas/fast-engine-client';

const body: ChannelPostRequest = {
  name: 'sdktest',
  type: ChannelPostRequestTypeEnum.Playlist,,
  url: 'https://testcontent.eyevinn.technology/fast/fastdemo.txt',
  opts: {
    useDemuxedAudio: false
  }
};

const client = new FastEngineOSaaSv1(config);
await client.channelPost(body);
```

#### Getting all running channels

```javascript
const client = new FastEngineOSaaSv1(configuration);

const channels = await client.channelGet();
channels.forEach((ch) => {
  console.log(`${ch.name}: ${ch.url}`);
});
```

#### Stopping and removing a channel

```javascript
const client = new FastEngineOSaaSv1(configuration);

await client.channelIdDelete('CHANNEL_ID');
```

## License

This project is licensed under the MIT License, see [LICENSE](LICENSE).

# Support

Join our [community on Slack](http://slack.streamingtech.se) where you can post any questions regarding any of our open source projects. Eyevinn's consulting business can also offer you:

- Further development of this component
- Customization and integration of this component into your platform
- Support and maintenance agreement

Contact [sales@eyevinn.se](mailto:sales@eyevinn.se) if you are interested.

# About Eyevinn Technology

[Eyevinn Technology](https://www.eyevinntechnology.se) is an independent consultant firm specialized in video and streaming. Independent in a way that we are not commercially tied to any platform or technology vendor. As our way to innovate and push the industry forward we develop proof-of-concepts and tools. The things we learn and the code we write we share with the industry in [blogs](https://dev.to/video) and by open sourcing the code we have written.

Want to know more about Eyevinn and how it is to work here. Contact us at work@eyevinn.se!
