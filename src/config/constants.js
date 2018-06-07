const devConfig = {
  MONGO_URL: 'mongodb://localhost/blogate-dev',
  JWT_SECRET: 'thisismysecretecode',
  TWITTER_CONSUMER_KEY: 'EGLoBrQWNNtCDLYQKh6pupRO1',
  TWITTER_CONSUMER_SECRET: '9FNzG4LlhCOhnNOf9VGS2SHQXAILjiLXTWfOrr9MT7W6nV05ww',
  TWITTER_CALLBACK_URL: 'http://127.0.0.1:3000/api/v1/users/auth/twitter/callback',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/blogate-test',
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/blogate-prod',
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
