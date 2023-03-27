import axios, {InternalAxiosRequestConfig} from 'axios';

const client = axios.create();

export const configureClient: (configuration: ConfigurationOptions) => void = ({
  baseURL,
}) => {
  if (baseURL === undefined) {
    throw new Error('baseURL is empty!');
  }
  client.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      // sets baseURL on every request
      config.baseURL = baseURL;
      config.headers['Content-Type'] = 'application/json';
      config.headers.Accept = 'application/json';

      return config;
    },
  );
};

export default client;
