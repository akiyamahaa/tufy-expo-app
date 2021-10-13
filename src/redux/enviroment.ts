const ENV = {
  dev: {
    API_BASE_URL: 'https://tufy.ap.ngrok.io/'
  },
  prod: {
    API_BASE_URL: 'https://tufy.ap.ngrok.io/'
  }
};

const getEnvVars = () => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else {
    return ENV.prod;
  }
};

export default getEnvVars;
