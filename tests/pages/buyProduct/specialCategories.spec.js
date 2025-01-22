/**
 * This file contains tests for further information on the buy page.
 * The tests are run according to the `products` array from the `data/buyProducts` module.
 */

import test from '../../../pageObjects/pageFixture';
import { products } from '../../../data/buyProducts';

products.forEach((product) => {
  test.describe(`Buy product - special categories`, async () => {
    test.beforeEach(async ({ buyPage }) => {
      await buyPage.goto(product.urlTitle);
    });

    test.skip(`Special categories content for ${product.fullTitle}`, async ({ buyPage }) => {});

    test.skip(`Special categories does not have period switch - ${product.fullTitle}`, async ({ buyPage }) => {});

    test.skip(`Special categories links lead to the appropriate pages - ${product.fullTitle}`, async ({
      buyPage,
    }) => {});
  });
});
