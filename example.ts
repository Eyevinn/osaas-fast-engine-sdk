import { createConfiguration, FastEngineOSaaSv1 } from '.'

const configuration = createConfiguration({ apiEndpoint: 'https://api-ce.stage.osaas.io' });
const apiInstance = new FastEngineOSaaSv1(configuration);

apiInstance
  .tokenPost({
    company: 'eyevinn',
    email: 'jonas.birme@eyevinn.se'
  })
  .then((data: any) => {
    console.log("Token generated: ", data);
  })
  .catch((error: any) => {
    console.error("Error generating token: ", error);
  });