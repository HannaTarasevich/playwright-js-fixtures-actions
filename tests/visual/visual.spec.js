import { expect } from '@playwright/test';
import test from '../../pageObjects/pageFixture';
import { products } from '../../data/buyProducts';

// TODO: GitHub Actions machines do render the page differently, so the test will fail
products.forEach((product) => {
  test.describe.skip(`Screenshot`, { tag: '@screenshot' }, async () => {
    test(`visual-test: ${product.fullTitle}`, async ({ buyPage }) => {
      await expect(buyPage.page).toHaveScreenshot({
        fullPage: true,
        maxDiffPixelRatio: 0.2,
      });
    });
  });
});
