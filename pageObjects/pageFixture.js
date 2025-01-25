/**
 * This module extends the Playwright test fixture to include a custom `buyPage` fixture.
 * The `buyPage` fixture navigates to the buy page, accepts cookies, and provides an instance of the `BuyPage` class.
 *
 * @module pageFixture
 */

import { test as fixture } from '@playwright/test';
import BuyPage from './pages/buy.page';
import { acceptCookies } from '../utils/helper';
import { products } from '../data/buyProducts';

const test = fixture.extend({
  buyPage: async ({ page, baseURL }, use, testInfo) => {
    const productLocatorId = products.find((p) => testInfo.title.includes(p.fullTitle)).fullTitle.replaceAll(' ', '-');
    await use(new BuyPage(page, productLocatorId));
  },

  forEachTest: [
    async ({ buyPage }, use, testInfo) => {
      await buyPage.goto(products.find((p) => testInfo.title.includes(p.fullTitle)).urlTitle);
      await use();
    },
    { auto: true },
  ],

  acceptCookies: [
    async ({ page }, use) => {
      await acceptCookies(page);
      await use(page);
    },
    { auto: true },
  ],
});

export default test;
