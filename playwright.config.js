import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/visual/__screenshots__/{projectName}{arg}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['list'], ['html']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.jetbrains.com/',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      viewport: { width: 1920, height: 1080 },
    },
    // {
    //   name: 'Desktop Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    //   viewport: { width: 1536, height: 864 },
    // },
    // {
    //   name: 'Desktop Safari',
    //   use: { ...devices['Desktop Safari'] },
    //   viewport: { width: 1366, height: 768 },
    // },
    // {
    //   name: 'Desktop Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    //   viewport: { width: 1280, height: 720 },
    // },
    // {
    //   name: 'Mobile - Samsung S24',
    //   use: {
    //     userAgent:
    //       'Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S24) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.16 Mobile Safari/537.36',
    //     screen: {
    //       width: 412,
    //       height: 915,
    //     },
    //     viewport: {
    //       width: 412,
    //       height: 839,
    //     },
    //     deviceScaleFactor: 2.625,
    //     isMobile: true,
    //     hasTouch: true,
    //     defaultBrowserType: 'chromium',
    //   },
    // },
    // {
    //   name: 'Mobile - iPhone 15',
    //   use: { ...devices['iPhone 15'] },
    // },
  ],
});
