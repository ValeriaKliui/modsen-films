import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    baseUrl: 'http://localhost:8080',
    video: false,
    testIsolation: false,
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
