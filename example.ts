import {
  ChannelPostRequest,
  ChannelPostRequestTypeEnum,
  createConfiguration,
  FastEngineOSaaSv1
} from '.';

async function main() {
  const configuration = createConfiguration({
    authMethods: {
      jwtToken: 'Bearer ' + process.env.TOKEN
    },
    apiEndpoint: 'https://api-ce.stage.osaas.io'
  });
  const client = new FastEngineOSaaSv1(configuration);

  // List and delete all channels
  try {
    const channels = await client.channelGet();
    for (const ch of channels) {
      console.log(`Removing ${ch.id}`);
      await client.channelIdDelete(ch.id);
    }
  } catch (err) {
    console.log(err.Body.body);
  }

  // Create a channel
  const body: ChannelPostRequest = {
    name: 'sdktest',
    type: ChannelPostRequestTypeEnum.Playlist,
    url: 'https://testcontent.eyevinn.technology/fast/fastdemo.txt',
    opts: {
      useDemuxedAudio: false
    }
  };

  try {
    const res = await client.channelPost(body);
    console.log(`Playback URL: ${res.playback}`);
  } catch (err) {
    console.log(err);
  }
}

main();
