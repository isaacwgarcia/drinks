module.exports = {
  // Store and declare your API Keys for Stepzen in .env.local file
  env: {
    STEPZEN_API_KEY: process.env.STEPZEN_API_KEY,
    STEPZEN_API_URL: process.env.STEPZEN_API_URL,
  },
  images: {
    domains: ["www.thecocktaildb.com"],
  },
  reactStrictMode: true,
};
