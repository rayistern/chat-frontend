const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    ACTION_ID: process.env.ACTION_ID,
    EXT_USER_ID: process.env.EXT_USER_ID,
    SESSION_ID: process.env.SESSION_ID
  },
};

module.exports = nextConfig;