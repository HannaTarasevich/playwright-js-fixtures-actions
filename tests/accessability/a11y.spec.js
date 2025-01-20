import AxeBuilder from '@axe-core/playwright';
import test from '../../pageObjects/pageFixture';
import { products } from '../../data/buyProducts';
import { expect } from '@playwright/test';

test.describe.skip(`Accessibility scans`, async () => {
  test.describe.configure({ retries: 0 });

  products.forEach((product) => {
    test.beforeEach(async ({ buyPage }) => {
      await buyPage.goto(product.urlTitle);
    });

    test(`a11y - ${product.urlTitle}`, async ({ buyPage }) => {
      const accessibilityScanResults = await new AxeBuilder(buyPage).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
