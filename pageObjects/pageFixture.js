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
    const product = products.find((p) => testInfo.title.includes(p.fullTitle));
    if (!product) {
      throw new Error(
        `Product is not found for test: ${testInfo.title}. Please add the product title to the test name and to the data/buyProducts.js file.`
      );
    }

    const productLocatorId = product.fullTitle.replaceAll(' ', '-');
    const buyPage = new BuyPage(page, productLocatorId);
    await buyPage.goto(product.urlTitle);
    await use(buyPage);
  },

  acceptCookies: [
    async ({ page }, use) => {
      await acceptCookies(page);
      await use(page);
    },
    { auto: true },
  ],
});

export default test;
