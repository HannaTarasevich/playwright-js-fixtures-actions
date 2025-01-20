/**
 * This module extends the Playwright test fixture to include a custom `buyPage` fixture.
 * The `buyPage` fixture navigates to the buy page, accepts cookies, and provides an instance of the `BuyPage` class.
 *
 * @module pageFixture
 */

import { test as fixture } from '@playwright/test';
import BuyPage from './pages/buy.page';
import CookiesComponent from './components/cookies.component';

const test = fixture.extend({
  buyPage: async ({ page, baseURL }, use) => {
    const cookiesComponent = new CookiesComponent(page);
    await page.goto(baseURL);
    await cookiesComponent.acceptCookies();
    await use(new BuyPage(page));
  },
});

export default test;
